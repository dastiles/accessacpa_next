export interface Items {
  id: string;
  label: string;
  description: string;
}

export interface States {
  state: string;
}


export interface Lead {
  name: string;
  email: string;
  summary: string;
  issue: string;
  issuesArray: string[];
  contact: string;
  phone: string;
  deadline: Date | undefined;
//   file: string;
}
