'use client'
import { Items, Lead } from "@/types";
import { accounting, audit, business, informationTechnology, other, tax } from "@/types/data";
import {  useState } from "react";
import { toast } from "react-toastify";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import * as DialogRoot from "@radix-ui/react-dialog";
import { ScrollArea } from "../ui/scroll-area";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Calendar } from "../ui/calendar";
import { Loader } from "lucide-react";
import { Button } from "../ui/button";
import { createLead } from "@/sanity/lib/api";




const Modal = ({
  children,
  issue,
}: {
  children: React.ReactNode;
  issue: string;
}) => {
  const [step, setStep] = useState(0);
  
  const [contactType, setContactType] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [issuesArray, setIssuesArray] = useState<string[]>([]);
  const [details, setDetails] = useState({
    email: "",
    name: "",
    summary: "",
    phone: "",
    issue: issue,
    requirements: "",
    deadline: date,
    contact: "",
    issuesArray: issuesArray,
  });

  
  //  const fileInputRef = useRef<HTMLInputElement>(null);

 
  
  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setLoading(true);
  //   const file = event.target.files ? event.target.files[0] : null;
  //   setDetails({ ...details, file: file?.name || "" });
  //   setLoading(false);
  // };

  


  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    setDetails({ ...details, [name]: value });
    console.log(details);
  };

  const checkboxIssues =  async (issue: string) => {
    if (issuesArray?.includes(issue)) {
      setIssuesArray(issuesArray.filter((item) => item !== issue));
    } else {
      setIssuesArray([...issuesArray, issue]);
    }
  };
  let items: Items[] = [];

  if (issue === "accounting") {
    items = accounting;
  } else if (issue === "business") {
   items = business
  } else if (issue === "tax") {
   items = tax
  } else if (issue === 'audit') {
    items = audit
  } else if (issue === 'information Technology') {
    items = informationTechnology
  } else if (issue === 'other') {
    items = other
  }

  const handleContinue =  async () => {
    const { name, email, phone, summary, requirements,contact,deadline } = details;

    if (step === 0) {
      if (issuesArray.length === 0) {
        toast.error("Please select at least one");
      } else {
        details.issuesArray = issuesArray;
        setStep(1);
      }
    } else if (step === 1) {
       if (name === "" || email === "" || phone === "" || summary === "") {
         toast.error("Fill all the information");
       } else {
         setStep(3);
       }
    } else if (step === 2) {
      if (requirements === "") {
        toast.error("Please enter your requirement");
      } else {
        setStep(3);
      }
    } else if (step === 3) {
      details.deadline = date;
      if (date === undefined) {
         toast.error("Please input deadline");
      } else {
         setStep(4);
      }
     
    } else if (step === 4) {
      if (contact === "") {
        toast.error("Please add contact information");
      } else {
        if (contactType === "email") {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          const test = regex.test(contact);
          if (!test) {
            toast.error("Enter valid email");
            return;
          }
        }
        setLoading(true);
        const lead: Lead = {
          name, email, phone, summary, contact,issuesArray:issuesArray, issue, deadline,
        }

      const leadData =  await createLead(lead);
       
        console.log(leadData);
        
 
      }
    }
  };

  return (
    <DialogRoot.Root open={open} onOpenChange={setOpen}>
      <DialogRoot.Trigger asChild>{children}</DialogRoot.Trigger>
      <DialogContent className="sm:max-w-[50vw]">
        <ScrollArea className="max-h-[95vh]  w-full">
          <DialogHeader>
            <DialogTitle>
              <div className="py-4 lg:py-1">
                {step === 0 && (
                  <span className="text-2xl">
                    Which {issue} services do you need?
                  </span>
                )}
                {step === 1 && (
                  <span className="text-2xl">Personal Details</span>
                )}
                {step === 2 && <span className="text-2xl">Requirements</span>}
                {step === 3 && (
                  <span className="text-2xl">Enter your deadline date</span>
                )}
                {step === 4 && (
                  <span className="text-2xl">
                    Enter Preferred Contact Method.
                  </span>
                )}
              </div>
            </DialogTitle>
          </DialogHeader>
          {step === 0 && (
            <div className="grid gap-4 py-4 px-8">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="flex flex-col gap-5 col-span-12">
                  {items.map((items) => (
                    <div className="bg-gray-50 py-2 col-span-12" key={items.id}>
                      <label className="flex gap-2 col-span-12" key={items.id}>
                        <input
                          type="checkbox"
                          value={items.id}
                          checked={issuesArray.includes(items.id)}
                          className="p-1"
                          onChange={(value) =>
                            checkboxIssues(value.target.value)
                          }
                        />
                        <div className="flex flex-col gap-2">
                          <h1 className="font-bold">{items.label}</h1>
                          <p>{items.description}</p>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {step === 1 && (
            <div className="grid gap-4 py-4 px-8">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-12">
                  <Label htmlFor="fullname" className="text-right">
                    Full Name
                  </Label>
                </div>

                <Input
                  name="name"
                  className="col-span-12"
                  value={details.name}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-12">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                </div>
                <Input
                  name="email"
                  className="col-span-12"
                  type="email"
                  value={details.email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-12">
                  <Label htmlFor="phone" className="text-right">
                    Phone Number
                  </Label>
                </div>
                <Input
                  name="phone"
                  className="col-span-12"
                  value={details.phone}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-12">
                  <Label htmlFor="summary">
                    Write a brief summary of your issue and your requirements.
                  </Label>
                </div>

                <Textarea
                  placeholder="Type your summary here."
                  name="summary"
                  className="col-span-12"
                  value={details.summary}
                  onChange={handleChangeInput}
                />
              </div>

              {/* <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-12">
                  <Label htmlFor="summary">
                    Upload a document about your issue
                  </Label>
                </div>

                <Input
                  type="file"
                  className="col-span-12"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                {loading && (
                  <p>
                    <Loader className="animate-spin" />
                    <span className="text-sm">Wait file uploading...... </span>
                  </p>
                )}
              </div> */}
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-4 py-4 px-8">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-12">
                  <Label htmlFor="requirements" className="text-right text-lg">
                    Requirements
                  </Label>
                </div>

                <Textarea
                  placeholder="Type your requirements here."
                  name="requirements"
                  className="col-span-12"
                  value={details.requirements}
                  onChange={handleChangeInput}
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-4 py-4 px-8">
              <div className="grid grid-cols-4 items-center gap-4">
                <div className="col-span-12">
                  <DialogDescription>
                    Please select a your dealine date
                  </DialogDescription>
                </div>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border col-span-12 w-full"
                />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="grid gap-4 py-4 px-8">
              <div className="grid grid-cols-4 items-center gap-4">
                <select
                  name=""
                  id=""
                  className="col-span-12 border-[0.5px] rounded border-gray-200 outline-none py-2"
                  onChange={(e) => setContactType(e.target.value)}
                >
                  <option value="">Choose Email or Phone</option>
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                </select>
                {contactType === "phone" && (
                  <Input
                    name="contact"
                    type="number"
                    className="col-span-12"
                    placeholder="Enter phone number"
                    value={details.contact}
                    onChange={handleChangeInput}
                  />
                )}

                {contactType === "email" && (
                  <Input
                    name="contact"
                    type="email"
                    className="col-span-12"
                    placeholder="Enter your email"
                    value={details.contact}
                    onChange={handleChangeInput}
                  />
                )}
              </div>
            </div>
          )}

          <DialogFooter>
            <div className="pb-4 w-full">
              {step === 4 && (
                <Button
                  type="submit"
                  className="bg-orange w-full disabled:opacity-45 flex gap-2"
                  color="black"
                  onClick={handleContinue}
                  disabled={loading}
                >
                  {loading && <Loader className="animate-spin" />}
                  Submit
                </Button>
              )}

              {step !== 4 && (
                <Button
                  type="submit"
                  className="bg-orange w-full"
                  color="black"
                  onClick={handleContinue}
                  disabled={loading}
                >
                  Continue
                </Button>
              )}
            </div>
          </DialogFooter>
        </ScrollArea>
      </DialogContent>
    </DialogRoot.Root>
  );
};

export default Modal;
