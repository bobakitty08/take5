import React, { useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const FitnessComponent = () => {
  const [showTip, setShowTip] = useState(false);
  const [showHome, setShowHome] = useState(false);
  const [showLearn, setShowLearn] = useState(false);
  const [showExercises, setShowExercises] = useState(false);
  const [showDietTracker, setShowDietTracker] = useState(false);

  const handleCloseTip = () => setShowTip(false);
  const handleShowTip = () => setShowTip(true);

  const handleCloseHome = () => setShowHome(false);
  const handleShowHome = () => setShowHome(true);

  const handleCloseLearn = () => setShowLearn(false);
  const handleShowLearn = () => setShowLearn(true);

  const handleCloseExercises = () => setShowExercises(false);
  const handleShowExercises = () => setShowExercises(true);

  const handleCloseDietTracker = () => setShowDietTracker(false);
  const handleShowDietTracker = () => setShowDietTracker(true);

  return (
    <Card style={{ backgroundColor: '#228B22', borderColor: '#228B22' }}>
      <Card.Body>
        <Card.Title>Fitness</Card.Title>
        <Card.Text>
          Stay fit and healthy with our fitness tools.
        </Card.Text>
        <Button variant="primary" onClick={handleShowTip}>
          Tip
        </Button>
        <Button variant="primary" onClick={handleShowLearn}>
          Learn
        </Button>
        <Button variant="primary" onClick={handleShowExercises}>
          Exercises
        </Button>
        <Button variant="primary" onClick={handleShowDietTracker}>
          Diet Tracker
        </Button>
      </Card.Body>
      <Modal show={showTip} onHide={handleCloseTip}>
        <Modal.Header closeButton>
          <Modal.Title>Fitness Tip</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Remember to stretch before and after your workout to prevent injury and
            improve flexibility.
          </p>
          <Button variant="secondary" onClick={handleCloseTip}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={showLearn} onHide={handleCloseLearn}>
        <Modal.Header closeButton>
          <Modal.Title>Learn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Learn about different exercises for specific muscles and how to properly
            perform them.
          </p>
          <p>
            Understand the benefits of cardio and muscle building exercises.
          </p>
          <Button variant="secondary" onClick={handleCloseLearn}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={showExercises} onHide={handleCloseExercises}>
        <Modal.Header closeButton>
          <Modal.Title>Exercises</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Choose from a variety of exercises for specific muscles or things like
            cardio and muscle building.
          </p>
          <Button variant="secondary" onClick={handleCloseExercises}>
            Close
          </Button>
        </Modal.Body>
      </Modal>
      <Modal show={showDietTracker} onHide={handleCloseDietTracker}>
        <Modal.Header closeButton>
          <Modal.Title>Diet Tracker</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Track your meals and get healthy recipe ideas to promote positive eating
            habits.
          </p>
          <Button variant="secondary" onClick={handleCloseDietTracker}>
            Close
          </Button>
        </Modal.Body>
  Export default BodyComponent;
