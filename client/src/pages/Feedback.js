import React from 'react';
import FeedbackComponent from '../components/Feedback';
import styled from 'styled-components';
import { Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const FeedbackPage = () => {
  const location = useLocation();
  // Pass feedback data from location.state if available
  return <FeedbackComponent feedbackFromState={location.state?.feedback} />;
};

const ChartContainer = styled.div`
  width: 100%;
  max-width: 180px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 600px) {
    max-width: 100%;
    min-width: 0;
  }
`;

const ListContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

export default FeedbackPage;
