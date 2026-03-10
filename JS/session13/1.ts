// Create a PaymentState discriminated union.

type PaymentState =
  | { status: "idle" }
  | { status: "processing" }
  | { status: "success"; transactionId: string }
  | { status: "failed"; error: string }

// Add exhaustive checking to handle all states.

function handlePayment(state: PaymentState): string {
  switch (state.status) {
    case "idle":
      return "Payment not started"

    case "processing":
      return "Processing payment"

    case "success":
      return `Payment successful. Transaction ID: ${state.transactionId}`

    case "failed":
      return `Payment failed: ${state.error}`

    default:
      const _exhaustive: never = state
      return _exhaustive
  }
}


// Create a generic ApiResponse<T> for products.
interface Product {
  id: string
  name: string
  price: number
  inStock: boolean
}

type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: string; errorCode: number }


function fetchProducts(): Promise<ApiResponse<Product[]>> {
  return Promise.resolve({
    success: true,
    data: [
      {
        id: "p1",
        name: "Laptop",
        price: 50000,
        inStock: true
      }
    ]
  })
}


// Write a type guard to check if response is success.
function isSuccess<T>(
  response: ApiResponse<T>
): response is { success: true; data: T } {
  return response.success === true
}