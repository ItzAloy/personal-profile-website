import React from 'react';
import SpotlightCard from './SpotlightCard';
import ProfileCard from './ProfileCard';
import FadeContent from './FadeContent';

const About: React.FC = () => {
  const skills = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="31" viewBox="0 0 33 31" fill="none">
          <path d="M33 0V21.5278C33 23.1264 32.3595 24.6596 31.2195 25.7901C30.0795 26.9205 28.5333 27.5556 26.9211 27.5556C25.3088 27.5556 23.7626 26.9205 22.6226 25.7901C21.4826 24.6596 20.8421 23.1264 20.8421 21.5278C20.8421 19.9291 21.4826 18.3959 22.6226 17.2655C23.7626 16.1351 25.3088 15.5 26.9211 15.5C27.8589 15.5 28.7447 15.7067 29.5263 16.0856V5.97611L12.1579 9.64445V24.9722C12.1579 26.5709 11.5174 28.1041 10.3774 29.2345C9.23739 30.3649 7.69118 31 6.07895 31C4.46671 31 2.92051 30.3649 1.78048 29.2345C0.640459 28.1041 0 26.5709 0 24.9722C0 23.3736 0.640459 21.8404 1.78048 20.7099C2.92051 19.5795 4.46671 18.9444 6.07895 18.9444C7.01684 18.9444 7.90263 19.1511 8.68421 19.53V5.16667L33 0Z" fill="white"/>
        </svg>
      ),
      title: 'Music Video Animation',
      description: 'Creating dynamic animated music videos with smooth transitions'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="27" viewBox="0 0 41 27" fill="none">
          <path d="M31.8889 10.125V2.25C31.8889 1.65326 31.6489 1.08097 31.2217 0.65901C30.7946 0.237053 30.2152 0 29.6111 0H2.27778C1.67367 0 1.09431 0.237053 0.667146 0.65901C0.239979 1.08097 0 1.65326 0 2.25V24.75C0 25.3467 0.239979 25.919 0.667146 26.341C1.09431 26.7629 1.67367 27 2.27778 27H29.6111C30.2152 27 30.7946 26.7629 31.2217 26.341C31.6489 25.919 31.8889 25.3467 31.8889 24.75V16.875L41 25.875V1.125L31.8889 10.125Z" fill="white"/>
        </svg>
      ),
      title: 'Lyric Music Video',
      description: 'Text-based lyric animations synchronized to the beat'
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="36" viewBox="0 0 22 36" fill="none">
          <path d="M11 1.5V7.6875M2.55556 1.5V13.875M19.4444 1.5V13.875M11 31.4062L4.66667 34.5L5.72222 27.2812L1.5 23.1562L7.83333 22.125L11 15.9375L14.1667 22.125L20.5 23.1562L16.2778 27.2812L17.3333 34.5L11 31.4062Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      ),
      title: '2 Years Experience',
      description: 'Consistent quality and professional video editing'
    }
  ];

  return (
    <section id="about" className="py-16 bg-[#050505]">
      <div className="max-w-[1112px] mx-auto px-[20px]">
        {/* Section Header */}
        <FadeContent blur duration={0.6} delay={0.1} yOffset={30}>
          <div className="mb-8">
            <h2 className="text-[36px] font-bold text-white font-montserrat">ABOUT ME</h2>
            <div className="w-full h-[1px] bg-white mt-4"></div>
          </div>
        </FadeContent>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Profile Card */}
          <FadeContent blur duration={0.6} delay={0.2} yOffset={40}>
            <div className="flex justify-center">
              <ProfileCard
                avatarUrl="/img/pfp-profile.png"
                miniAvatarUrl="https://avatars.githubusercontent.com/ItzAloy"
                name="Aloy"
                title="Video Editor"
                handle="ItzAloy"
                status="Available for work"
                contactText="Hire Me"
                showUserInfo={true}
                behindGlowColor="rgba(147, 51, 234, 0.5)"
                behindGlowSize="50%"
                innerGradient="linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
                onContactClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
          </FadeContent>

          {/* Right Side - Journey Text */}
          <FadeContent blur duration={0.6} delay={0.3} yOffset={40}>
            <div>
              <h3 className="text-[24px] font-bold text-white mb-4 font-montserrat">My Journey</h3>
              <div className="text-[16px] text-white font-montserrat leading-relaxed space-y-4">
                <p>
                  Let me introduce myself. My name is Aloy. I'm an active student at SMK Telkom Malang with a deep interest in Network System Administration, Cybersecurity, and Video Editing. Of these three fields, I have the most experience in Video Editing.
                </p>
                <p>
                  I'm just someone who likes making AMV (Anime Music Videos). With 2 years of experience in video editing, I've developed expertise in various editing software and techniques.
                </p>
                <p>
                  I started with CapCut but have since evolved to use more professional tools like{' '}
                  <span className="font-semibold text-[#3700ff]">Adobe After Effects</span>,{' '}
                  <span className="font-semibold text-[#bf00ff]">Adobe Premiere Pro</span>, and{' '}
                  <span className="font-semibold text-[#ff9d00]">DaVinci Resolve</span>.
                </p>
                <p>Because CapCut... you know what I mean. 😅</p>
              </div>
            </div>
          </FadeContent>
        </div>

        {/* What I Can Do Section */}
        <FadeContent blur duration={0.6} delay={0.4} yOffset={40}>
          <div className="mt-12">
            <h3 className="text-[24px] text-center font-bold text-white mb-6 font-montserrat">What I Can Do</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <SpotlightCard
                  key={index}
                  className="h-full"
                  spotlightColor="rgba(0, 110, 255, 0.67)"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      {skill.icon}
                    </div>
                    <div className="text-white">
                      <h4 className="font-semibold text-[16px] font-montserrat mb-1">{skill.title}</h4>
                      <p className="text-[13px] font-montserrat opacity-70 leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </FadeContent>

        {/* Thank You Section */}
        <FadeContent blur duration={0.6} delay={0.5} yOffset={40}>
          <div className="mt-12 text-center">
            <h3 className="text-[24px] font-bold text-white mb-4 font-montserrat">Thank You! 🤗</h3>
            <p className="text-[16px] text-white font-montserrat max-w-[632px] mx-auto leading-relaxed">
              I'm passionate about creating high-quality video content that brings stories to life. Every project is an opportunity to push creative boundaries and deliver exceptional results.
            </p>
          </div>
        </FadeContent>
      </div>
    </section>
  );
};

export default About;
