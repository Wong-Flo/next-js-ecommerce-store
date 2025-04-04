export const metadata = {
  title: 'Checkout',
  description: 'Generated by create next app',
};
export default function CartPage() {
  return (
    <>
      <div className="xLarge">
        <h1>Checkout Page</h1>
      </div>
      <div className="checkout-form">
        <h2>Checkout Form</h2>
        <form>
          <label>
            First name:
            <input required />
            <br />
            Last name:
            <input required />
            <br />
            Delivery Address:
            <input required />
            <br />
            Postal Code:
            <input required />
            <br />
            Country:
            <input required />
            <br />
            Payment Methods:
            <select required>
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
              <option value="American Express">American Express</option>
              <option value="PayPal">PayPal</option>
            </select>
            <br />
            Card Number:
            <input required />
            Valid Thru:
            <input required />
            CVV:
            <input required />
          </label>
        </form>

        <button className="SubmitButton">Submit</button>
      </div>
    </>
  );
}
