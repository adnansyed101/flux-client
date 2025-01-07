const ContactUs = () => {
  return (
    <div className="min-h-screen flex justify-center items-center py-20 px-2">
      <div className="card w-full max-w-4xl shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center text-primary">
            Contact Us
          </h2>
          <p className="text-center  mb-6">
            Have questions or feedback? We&apos;d love to hear from you!
          </p>
          <form className="space-y-4">
            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
              />
            </div>

            {/* Subject */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Subject</span>
              </label>
              <input
                type="text"
                placeholder="Enter the subject"
                className="input input-bordered"
              />
            </div>

            {/* Message */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea
                placeholder="Type your message here"
                className="textarea textarea-bordered"
                rows="4"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
