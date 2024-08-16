const DatabaseUrl = process.env.DATABASE_URL

export const CONSTANT = { DatabaseUrl }


export enum MERCHANT_STATUS {
  "Waiting_Approval",
  "Rejected",
  "Approved"
}
