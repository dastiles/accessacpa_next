import { Lead } from "@/types";
import axios from "axios";

export const createLead = async ({
    name,
    email,
    summary,
    issue,
    issuesArray,
    contact,
    phone,
    deadline,
    file,
}: Lead) => {
  const mutation = {
    mutations: [
      {
        create: {
          _type: "lead",
              name,
              email,
              summary,
              issue,
              issuesArray,
              contact,
              phone,
              deadline,
                file,
        },
      },
    ],
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SANITY_API_TOKEN}`,
      },
    }
  );

  return data;
};
