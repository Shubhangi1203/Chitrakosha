interface RazorpayOrderResponse {
  id: string;
  entity: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  status: string;
  attempts: number;
  created_at: number;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export type { RazorpayOrderResponse };
