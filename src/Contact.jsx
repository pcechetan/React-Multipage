import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;

    .container1{
      display: flex;
      align-items: center;
      

    }
    .container {
      margin-top: 6rem;
      text-align: center;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .container1{
          margin-left: 0;
        }
    }
  `;

  return (
    <Wrapper >
     
      <h2 className="common-heading">Feel Free to Contact us</h2>
      <div className="container1"> 
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.
      545583161488!2d75.86337437424547!3d26.822594176700996!2m3!1f0!2f0!3f0!3m2!
      1i1024!2i768!4f13.1!3m3!1m2!1s0x396db770070b115f%3A0x6f306afd08a3e737!2s
      Swami%20Keshvanand%20Institute%20of%20Technology%2C%20Management%20%26%20
      Gramothan%20(SKIT)!5e0!3m2!1sen!2sin!4v1711130831851!5m2!1sen!2sin" 
      width="100%" 
      height="450" 
      style={{border:0}} 
      allowFullScreen="" 
      loading="lazy" r
      eferrerpolicy="no-referrer-when-downgrade"></iframe>
     </div>
      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xgedgjkr"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;
