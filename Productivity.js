import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const ProductivityComponent = () => {
  const [showResources, setShowResources] = useState(false);
  const [showStudy, setShowStudy] = useState(false);
  const [showTest, setShowTest] = useState(false);

  const handleCloseResources = () => setShowResources(false);
  const handleShowResources = () => setShowResources(true);

  const handleCloseStudy = () => setShowStudy(false);
  const handleShowStudy = () => setShowStudy(true);

  const handleCloseTest = () => setShowTest(false);
  const handleShowTest = () => setShowTest(true);

  return (
    <Card style={{ backgroundColor: '#ffc0cb', borderColor: '#ff6347' }}>
      <Card.Body>
        <Card.Title>Productivity</Card.Title>
        <Card.Text>
          Stay organized and manage your time effectively with our productivity tools.
        </Card.Text>
        <Button variant="primary" onClick={handleShowResources}>
          Resources to study from
        </Button>
        <Button variant="primary" onClick={handleShowStudy}>
          Effective ways to study
        </Button>
        <Button variant="primary" onClick={handleShowTest}>
          Effective test taking strategies
        </Button>
      </Card.Body>
      <Modal show={showResources} onHide={handleCloseResources}>
        <Modal.Header closeButton>
          <Modal.Title>Resources to study from</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                Calming video
              </a>
            </li>
            <li>
              <a href="https://www.khanacademy.org/">Khan Academy</a>
            </li>
            <li>
              <a href="https://www.coursera.org/">Coursera</a>
            </li>
          </ul>
        </Modal.Body>
      </Modal>
      <Modal show={showStudy} onHide={handleCloseStudy}>
        <Modal.Header closeButton>
          <Modal.Title>Effective ways to study</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              Create a study schedule and stick to it.
            </li>
            <li>
              Take breaks every hour to avoid burnout.
            </li>
            <li>
              Find a quiet, distraction-free environment to study.
            </li>
          </ul>
        </Modal.Body>
      </Modal>
      <Modal show={showTest} onHide={handleCloseTest}>
        <Modal.Header closeButton>
          <Modal.Title>Effective test taking strategies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li>
              Read the instructions carefully.
            </li>
            <li>
              Skim the entire test before answering any questions.
            </li>
            <li>
              Answer the easiest questions first to build confidence.
            </li>
          </ul>
        </Modal.Body>
      </Modal>
    </Card>
  );
};

export default ProductivityComponent;
