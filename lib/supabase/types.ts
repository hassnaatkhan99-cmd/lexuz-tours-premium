export type BookingStatus = "Pending Verification" | "Approved" | "Confirmed" | "Rejected" | "Cancelled";

export type Customer = {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  cnic: string;
  emergency_contact: string;
  created_at: string;
};

export type Booking = {
  id: string;
  reference_id: string;
  customer_id: string;
  tour_name: string;
  departure: string;
  departure_city: string | null;
  pickup_city: string;
  pickup_location: string;
  number_of_travelers: number;
  total_amount: number | null;
  advance_paid: number | null;
  remaining_amount: number | null;
  status: BookingStatus;
  created_at: string;
  updated_at: string;
  customers?: Customer | null;
  payments?: Payment[] | null;
};

export type Payment = {
  id: string;
  booking_id: string;
  payment_method: string;
  screenshot_path: string;
  screenshot_url?: string | null;
  status: "Submitted" | "Verified" | "Confirmed" | "Rejected";
  created_at: string;
};
