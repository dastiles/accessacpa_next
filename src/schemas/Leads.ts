import { defineField } from "sanity";
const Leads = {
  name: "lead",
  type: "document",
  title: "Lead",
    fields: [
        defineField({
            name: "email",
            type: "string",
            title: "Email",
        }),
        defineField({
            name: "name",
            type: "string",
            title: "Name",
        }),
        defineField({
            name: "summary",
            type: "text",
            title: "Summary",
        }),
        defineField({
            name: "phone",
            type: "string",
            title: "Phone",
        }),
        defineField({
            name: "issue",
            type: "string",
            title: "Issue",
        }),
        defineField({
            name: "requirements",
            type: "string",
            title: "Requirements",
        }),
        defineField({
            name: "deadline",
            type: "date",
            title: "Deadline",
        }),
        defineField({
            name: "contact",
            type: "string",
            title: "Contact",
        }),
        defineField({
            name: "issuesArray",
            type: "array",
            of: [{ type: "string" }],
            title: "Issues Array",
        }),
        // defineField({
        //     name: "file",
        //     type: "file",
        //     title: "File",
        // }),
  ],
};

export default Leads;
