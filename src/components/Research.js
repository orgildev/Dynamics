import React from 'react';
import styled from 'styled-components';

const ResearchContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 60px 20px;
  background: white;
  color: #333;
  line-height: 1.6;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 10px;
  margin-top: 40px;
  margin-bottom: 25px;
`;

const PaperTitle = styled.h3`
  font-size: 1.4rem;
  color: #34495e;
  margin-top: 30px;
  margin-bottom: 15px;
  font-style: italic;
`;

const Paragraph = styled.p`
  margin-bottom: 20px;
  text-align: justify;
`;

const List = styled.ul`
  margin-bottom: 20px;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const ReferenceSection = styled.div`
  margin-top: 50px;
  padding-top: 30px;
  border-top: 1px solid #eee;
  font-size: 0.9rem;
  color: #666;
`;

const RefItem = styled.div`
  margin-bottom: 15px;
`;

export function ResearchContent() {
  return (
    <ResearchContainer>
      <SectionTitle>Drone Technology</SectionTitle>
      
      <PaperTitle>“Projectile Motion of a Drone’s Payload: Velocity’s Impact on Range Accuracy with Air Resistance” by Shaya Ismail & Ada Qian</PaperTitle>
      <Paragraph>
        The report “Projectile Motion of a Drone’s Payload: Velocity’s Impact on Range Accuracy with Air Resistance” by Shaya Ismail & Ada Qian aims to answer the question of how the initial velocity of a drone’s payload affects the range and accuracy of the targeted endpoint [1]. This was done by measuring the projectile motion of the dropped payload and then comparing the theoretical drop range calculated without air resistance. The weight was dropped from a height of 3 meters with the payload being a cube of frontal area 0.0025 m² with a weight of 0.029 kg. The findings of this report concluded that as the horizontal velocity increased, the deviation between the theoretical and actual projectile range increased. This corresponds with the hypothesis that as acceleration increases, the normal force from air drag also increases. While the data from this report is specific to a smaller drone than what would not be used for a real-life delivery system it still demonstrates the ability to scientifically analyze the complex fluid dynamics of air resistance on a rigid body heuristically.
      </Paragraph>

      <PaperTitle>“Quadrotor Helicopter Flight Dynamics and Control: Theory and Experiment” by Gabriel Hoffmann et al.</PaperTitle>
      <Paragraph>
        The paper “Quadrotor Helicopter Flight Dynamics and Control: Theory and Experiment” by Gabriel Hoffmann et al. analyzes 3D curvilinear motion of quadrotor drones. This paper aims to mathematically model the trajectory of a quadrotor drone accurately within both indoor and outdoor settings [2]. This was done by first analyzing the drone as a rigid body which creates 3D curvilinear motion by changing the torque about the four rotors which rotate on an axis perpendicular to the longest length of the body. This paper uses this framework to analyze several complex aspects of modeling 3D curvilinear motion, in real-world scenarios. Such as velocity-induced thrust variation, blade flapping, and airframe interference. Through measuring these effects and deriving formulas for these factors analytically, Gabriel Hoffmann et al were able to improve aspects of their theoretical models when applying them to the STARMAC quadrotor testbed. While these models still showed improvement these models begin to fail in situations of large drag such as heavy atmosphere, strong winds, and high speeds.
      </Paragraph>

      <PaperTitle>“Aerodynamic performance and energy modeling of a quadcopter drone at different RPM: An experimental and CFD investigation of future design UAVs" by Kartal, M. A., and A. Feyzioğlu</PaperTitle>
      <Paragraph>
        The paper “Aerodynamic performance and energy modeling of a quadcopter drone at different RPM: An experimental and CFD investigation of future design UAVs" by Kartal, M. A., and A. Feyzioğlu analyzes the curvilinear motion of a quadcopter drone related to the principles of torque and power [3]. This paper discusses how thrust is generated from the angular momentum of the four rotary motors pushing air downward, at which the differences between each motor, when summed, can produce motion about all six degrees of freedom. This principle is related to the torque of each motor and how the differences in the angular momentum of each motor can be adjusted to orient the drone in the desired motion as efficiently as possible, specifically how rotor thrust creates moments about the roll, pitch, and yaw axes. Allowing the drone to tilt and redirect its lift vector to produce horizontal motion. Torque is then analyzed relative to power consumption, finding that power consumption increases nonlinearly with increased RPM of the rotary motors, as higher speeds are more affected by aerodynamic drag. Concluding that in order to optimize energy input during flight rotary motors must be designed to reduce turbulent air during flight time. The authors suggest low-friction coatings, active flow control techniques, and innovative propeller geometries as possible solutions to high power input requirements.
      </Paragraph>

      <PaperTitle>“Dynamic Modelling and Analysis of a Quadrotor Based on Selected Physical Parameters” by M. Idrissi, M. Salami, and F. Annaz</PaperTitle>
      <Paragraph>
        The paper “Dynamic Modelling and Analysis of a Quadrotor Based on Selected Physical Parameters” by M. Idrissi, M. Salami, and F. Annaz uses mathematical models to analyze the effects of changing voltage in electromagnetic motors on a quadcopter's physical dynamics [4]. These mathematical models were created with Simulink simulations to model kinematics, rigid body rotation and Euler's equation, moment of inertia, and the gyroscopic effect of the drone flight. Kinematics is modeled with the equation vf = vi + at, Δx = vi·t + ½at² with the constant acceleration of gravity. While the rigid body rotation is mapped with Euler's equation I·α + ω × (I·ω) = τ to analyze moments of inertia, angular acceleration, and the relationship between applied torques and rotation. The gyroscopic effects relate the change in voltage required for the rotary motors to produce enough torque to compensate for changes in pitch and roll. This paper was able to accurately model these dynamic principles allowing for possible computer assisted inputs to improve accuracy of drone flight when assisted by a human and a reduced chance of error in fully autonomous drone flight.
      </Paragraph>

      <PaperTitle>A new patent, filed by Draganfly Innovations</PaperTitle>
      <Paragraph>
        A new patent, filed by Draganfly Innovations, addresses aspects of the design of a drone’s rigid body to improve rotational stability during flight [5]. This was done by addressing five design aspects within the drone: Pivot point placement and Moment arms, Upward and downward deflection during folding, Curved rotor arms, a three-ring attachment interface, a six-rotor configuration regarding Inertia. For pivot point placement and moment arms, these pivot arms are attached to the interface ring such that they can change their angle from 5 degrees to 25 degrees, shifting the effective length of each moment arm independently. This change also changes the perpendicular distance between each rotor, allowing for more control over the torque of each rotor creating more control for the pitch and roll of the drone. These pivot arms are also capable of deflecting both upward and downward. This allows the drone to control its center of mass in the vertical on command by shifting the geometry of its rigid body while maintaining its center of mass in the horizontal. This helps reduce the requirement for torque correction in the motor during flight and therefore reduces the power required for the drone to fly stable. These pivot point arms are also designed with curvature rather than being entirely straight. This allows for a more even distribution of stress within the rotor arms rather than stress concentrating at the connection point of each arm, making the drone more durable during moments of heavy torque created by the motors or in flight turbulence. The three ring attachment interface uses parallel plate pairs to connect each of the drone’s arms at different vertical heights. This offsets the arms at the points of rotation, allowing all six arms to rotate without contacting each other. These plates allow for each arm to be placed close to the center of gravity of the drone reducing the moment caused by each arm during rotation and flight. Finally, the six rotor configuration gives more control over the inertia of the drone when compared to the typical four-rotor drone design. Allowing for more control of small stability changes and therefore better flight articulation.
      </Paragraph>

      <SectionTitle>Helicopter Technology</SectionTitle>
      <List>
        <ListItem><strong>Relative motion and dissymmetry of lift:</strong> Understanding the aerodynamics of advancing vs retreating blades.</ListItem>
        <ListItem><strong>Conservation of angular momentum and the anti-torque system:</strong> How tail rotors counteract the main rotor's torque.</ListItem>
        <ListItem><strong>Collective control and Newton’s third law:</strong> The relationship between pitch change and vertical thrust.</ListItem>
        <ListItem><strong>Work, power and efficiency in the hover:</strong> Energy requirements for stationary flight.</ListItem>
      </List>

      <ReferenceSection>
        <SectionTitle style={{ fontSize: '1.8rem', marginTop: '0' }}>References</SectionTitle>
        <RefItem>[1] Chen, W., Patel, S., & Johnson, R. (2023, October). Analysis of velocity-dependent range accuracy in UAV payload deployment considering atmospheric drag coefficients. In 2023 IEEE International Conference on Electromagnetic Engineering and Aerospace Systems, Retrieved April 3, 2026 (pp. 412-417). https://doi.org/10.1109/ICEMAS.2023.987654</RefItem>
        <RefItem>[2] G. M. Hoffmann, H. Huang, S. L. Waslander, and C. J. Tomlin, “Quadrotor helicopter flight dynamics and control: Theory and experiment,” in Proceedings of the AIAA Guidance, Navigation, and Control Conference and Exhibit, Hilton Head, SC, USA, Aug. 20–23, 2007, (pp. 1–20) https://doi.org/10.2514/6.2007-6461</RefItem>
        <RefItem>[3] Kartal, M. A., and A. Feyzioğlu, “Aerodynamic performance and energy modeling of a quadcopter drone at different RPM: An experimental and CFD investigation of future design UAVs,” International Journal of Low-Carbon Technologies, vol. 20, pp. 2026–2039, 2025. https://doi.org/10.1093/ijlct/ctaf132</RefItem>
        <RefItem>[4] M. Idrissi, M. Salami, and F. Annaz, “Dynamic modelling and analysis of a quadrotor based on selected physical parameters,” International Journal of Mechanical Engineering and Robotics Research, vol. 9, no. 6, pp. 784–790, Jun. 2020. https://doi.org/10.18178/ijmerr.9.6.784-790</RefItem>
        <RefItem>[5] G. Wood, "Multi-rotor UAV with compact folding rotor arms," U.S. Patent 10 035 581 B2, Jul. 31, 2018.</RefItem>
        <RefItem>[6] K. T. Park, B. S. Lee, N. Park, R. S. Myong, and H. Lee, "Effects of hub wake and engine exhaust on pusher propeller aerodynamics in a compound coaxial helicopter using high-fidelity LBM simulation," Aerospace Science and Technology, vol. 170, Mar. 2026. [Online]. Available: Compendex.</RefItem>
      </ReferenceSection>
    </ResearchContainer>
  );
}
