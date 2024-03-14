import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const PeopleComponent = () => {
  const [showTip, setShowTip] = useState(false);
  const [showPractice, setShowPractice] = useState(false);
  const [showPostureVerbal, setShowPostureVerbal] = useState(false);
  const [showVocal, setShowVocal] = useState(false);

  const handleCloseTip = () => setShowTip(false);
  const handleShowTip = () => setShowTip(true);

  const handleClosePractice = () => setShowPractice(false);
  const handleShowPractice = () => setShowPractice(true);

  const handleClosePostureVerbal = () => setShowPostureVerbal(false);
  const handleShowPostureVerbal = () => setShowPostureVerbal(true);

  const handleCloseVocal = () => setShowVocal(false);
  const handleShowVocal = () => setShowVocal(true);

  return (
    <View>
      <TouchableOpacity onPress={handleShowTip}>
        <Text>People - Moksha - Lavender</Text>
      </TouchableOpacity>
      <Modal visible={showTip} animationType="slide">
        <View>
          <TouchableOpacity onPress={handleCloseTip}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text>
            A random tip about verbal communication:
            <Text>
              {"\n"}
              "Listen actively and show empathy towards the speaker to build a
              stronger connection."
            </Text>
          </Text>
        </View>
      </Modal>
      <Modal visible={showPractice} animationType="slide">
        <View>
          <TouchableOpacity onPress={handleClosePractice}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text>
            Practice section:
            <Text>
              {"\n"}
              You are approached with an idea for your team project that doesn’t
              seem feasible, what do you do?
            </Text>
            <TouchableOpacity>
              <Text>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Option 3</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </Modal>
      <Modal visible={showPostureVerbal} animationType="slide">
        <View>
          <TouchableOpacity onPress={handleClosePostureVerbal}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text>
            Posture + Verbal section:
            <Text>
              {"\n"}
              Shoulder exercises to improve posture:
              <Text>
                {"\n"}
                Exercise 1
              </Text>
              <Text>
                {"\n"}
                Exercise 2
              </Text>
              <Text>
                {"\n"}
                Exercise 3
              </Text>
              <Text>
                {"\n"}
                Tip: Pushing your shoulders back gives a more confident
                appearance.
              </Text>
            </Text>
          </Text>
        </View>
      </Modal>
      <Modal visible={showVocal} animationType="slide">
        <View>
          <TouchableOpacity onPress={handleCloseVocal}>
            <Text>X</Text>
          </TouchableOpacity>
          <Text>
            Vocal exercises to improve your rate of speech and annunciation:
            <Text>
              {"\n"}
              User is prompted to read a paragraph and our app identifies rate
              of speech - whether it’s too fast or slow and annunciation level
              - scale of 1-5.
            </Text>
          </Text>
        </View>
      </Modal>
    </View>

export default PeopleComponent;
  
