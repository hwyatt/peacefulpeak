export const Hero = () => {
  return (
    <div className="hero bg-base-100">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <img src="/morgan.jpeg" className="max-w-sm rounded-lg shadow-2xl" />
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-2xl font-bold">About Us</h1>
          <p className="py-6">
            Hi, I’m Morgan Palser, the heart behind Peaceful Peak Planning. As
            an experienced event coordinator, my passion is helping couples turn
            their vision into reality. With an eye for detail and a calm,
            supportive presence, I’ll guide you through every step of the
            planning process so your day reflects your unique love story.
            <br />
            <br />
            A few years ago, I discovered through the Clifton StrengthsFinder
            assessment that my greatest gifts are in planning and hospitality. I
            didn’t quite know how to put those strengths to use—until one very
            special moment. While reminiscing with my husband about our own
            wedding day, he reminded me how beautifully everything came together
            and how much joy I found in coordinating the details. That’s when it
            clicked. Within two days, Peaceful Peak Planning was born.
            <br />
            <br />
            Now, it’s my joy and honor to walk alongside couples as they plan
            one of the most meaningful days of their lives. From big-picture
            dreams to the tiniest details, I’m here to ensure your day feels
            effortless, beautiful, and full of love. I would be so honored to be
            part of your journey and help bring your “happily ever after” to
            life.
          </p>
          <button className="btn btn-neutral btn-lg btn-wide lg:hidden mt-8 rounded-lg">
            Get Started
          </button>
          <button className="btn btn-neutral btn-lg hidden lg:block mt-8 rounded-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
