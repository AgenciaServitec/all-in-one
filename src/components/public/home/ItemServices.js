import styled from "styled-components";

export const ItemServices = ({ img, title, content }) => {
  return (
    <Container>
      <figure>
        <img src={img} width="100%" height="100%" alt={title} />
      </figure>
      <div className="content-text">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </Container>
  );
};

const Container = styled.div`
  background: #1a1a1a;
  border-radius: 1rem;
  width: 23rem;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  //padding: 1rem 0.5rem;
  figure{
    overflow: hidden;
  }
  figure:hover img {
    transform: scale(1.3);
    -webkit-transform: scale(1.3);
    transition: all .3s ease;
  }
  img {
    width: 100%;
    height: auto;
  }
  .content-text {
    padding: 1.5rem 0.5rem;
    h3 {
      font-size: 1.6rem;
      font-weight: 700;
      text-align: center;
      color: white;
      font-family: "Intro Demo", sans-serif;
    }
    p {
      padding: 0 0.5rem;
      font-size: 0.9rem;
      text-align: center;
      color: #abb6c2;
      font-family: "Intro Demo", sans-serif;
    }
  }
`;
