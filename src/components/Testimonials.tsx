import StarBorder from './StarBorder';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    content: "The team delivered beyond our expectations. Our website now looks modern and works flawlessly across all devices. Truly exceptional service!",
    color: "cyan",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, GrowthApp",
    content: "Working with them was a breeze. They understood our vision immediately and translated it into a beautiful, highly functional mobile application.",
    color: "cyan",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Marketing Director",
    content: "Our conversion rates skyrocketed after the redesign. The attention to detail and user experience is simply unmatched. Highly recommended.",
    color: "cyan",
  }
];

const Testimonials = () => {
  return (
    <section className="snap-start min-h-screen py-24 px-6 relative z-20 w-full flex flex-col justify-center items-center" id="testimonials">
      <div className="w-full max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '64px' }}>
          <div style={{ position: 'relative', display: 'inline-block', marginBottom: '24px' }}>
            <h2 className="text-4xl font-extrabold text-white uppercase tracking-wider">What Clients Say About Us</h2>
            <div style={{ position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)', width: '64px', height: '4px', backgroundColor: '#ffffff', borderRadius: '9999px' }}></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {testimonials.map((testimonial) => (
            <StarBorder
              key={testimonial.id}
              as="div"
              className="w-full h-full shadow-xl shadow-black/50"
              color={testimonial.color}
              speed="6s"
              thickness={2}
            >
              <div className="flex flex-col h-full text-left p-10 md:p-12">
                <svg className="w-10 h-10 text-gray-500 mb-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.714 4.133-8.995 8.983-10.609l.995 2.151c-2.433.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.714 4.133-8.995 8.983-10.609l.995 2.151c-2.433.917-3.995 3.638-3.995 5.849h4v10h-9.983z" />
                </svg>
                <p className="text-gray-300 md:text-lg mb-8 flex-grow leading-relaxed font-medium">
                  "{testimonial.content}"
                </p>
                <div className="mt-auto">
                  <h4 className="font-bold text-white text-xl">{testimonial.name}</h4>
                  <p className="text-gray-500 text-base">{testimonial.role}</p>
                </div>
              </div>
            </StarBorder>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
