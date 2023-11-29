import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { PaymentFormContainer, FormContainer } from "./payment-form.styles";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";
import { UserContext } from "../../contexts/user.context";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { currentUser } = useContext(UserContext);
  const { cartTotal, emptyCart, cartItems } = useContext(CartContext);
  const [loading, setLoading] = useState(false);
  const [orderInfo, setOrderInfo] = useState(null);
  const navigate = useNavigate();
  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: cartTotal * 100 }),
    }).then((res) => res.json());

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.email : "Guest",
        },
      },
    });

    setLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      alert("Payment successful");
      setOrderInfo(paymentResult);
      emptyCart();
      navigate("/success");
    }
  };

  return (
    <>
      {cartItems.length && (
        <PaymentFormContainer>
          <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment</h2>
            <CardElement />
            {loading ? (
              <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Loading</Button>
            ) : (
              <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
            )}
          </FormContainer>
        </PaymentFormContainer>
      )}
    </>
  );
};

export default PaymentForm;
