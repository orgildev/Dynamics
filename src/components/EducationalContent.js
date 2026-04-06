import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  width: 400px;
  height: auto;
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-height: 80vh;
  overflow-y: auto;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 15px;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  color: #444;
  margin-bottom: 10px;
`;

const ScrollNotice = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px dashed #ccc;
  text-align: center;
  color: #3498db;
  font-weight: bold;
  font-size: 0.9rem;
`;

export function EducationalContent({ showDrone }) {
  return (
    <Container>
      <Title>{showDrone ? 'Drone Technology' : 'Helicopter Flight Mechanics'}</Title>

      {showDrone ? (
        <>
          <Section>
            <SectionTitle>Drone Flight Mechanics</SectionTitle>
          </Section>

          <Section>
            <SectionTitle>Quadcopter Control</SectionTitle>
            <ul>
              <li>Multiple Rotors: Uses four independent rotors for stable flight.</li>
              <li>Electronic Speed Control: Adjusts individual rotor speeds for movement.</li>
              <li>Gyroscopic Stabilization: Maintains level flight and position.</li>
            </ul>
          </Section>

          <Section>
            <SectionTitle>Flight Characteristics</SectionTitle>
            <p>Drones achieve stability through balanced thrust from multiple rotors. Counter-rotating propellers eliminate the need for anti-torque systems, providing efficient and precise control in all directions.</p>
          </Section>
        </>
      ) : (
        <>
          <Section>
            <SectionTitle>Helicopter Flight Mechanics</SectionTitle>
          </Section>

          <Section>
            <SectionTitle>Controlling Helicopter Motion</SectionTitle>
            <ul>
              <li>Cyclic Control: Tilts the rotor disc to control forward, backward, and lateral movement.</li>
              <li>Collective Control: Changes the pitch of all blades to increase or decrease altitude.</li>
              <li>Anti-Torque System: A tail rotor or NOTAR system counteracts torque to maintain stability.</li>
              <li>Dissymmetry of Lift: Blade flapping and cyclic feathering compensate for imbalance.</li>
            </ul>
          </Section>

          <Section>
            <SectionTitle>Flight Characteristics</SectionTitle>
            <p>Helicopters use a complex mechanical system of swashplates and pitch links to control the orientation and thrust of a single main rotor, with a tail rotor providing necessary anti-torque and yaw control.</p>
          </Section>
        </>
      )}
      <ScrollNotice>↓ Scroll down for in-depth research ↓</ScrollNotice>
    </Container>
  );
}