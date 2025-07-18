const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <h2 className="text-3xl font-bold text-center text-blue-400 mb-12">Contact Me</h2>

      <div className="max-w-xl mx-auto bg-white/5 backdrop-blur-md p-8 rounded-2xl shadow-md border border-white/10">
        <p className="text-gray-300 text-center text-lg mb-6">
          Feel free to reach out! Whether it’s a project, job opportunity, or just to say hi 👋
        </p>

        <div className="space-y-4 text-center text-white text-lg">
          <div>
            📧 Email: 
            <a href="mailto:your.email@example.com" className="text-blue-400 hover:underline ml-2">
              s.akashkumar004@gmail.com
            </a>
          </div>

          <div>
            📱 Phone: 
            <span className="ml-2">+91-8870823022</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
