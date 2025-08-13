import Button from "./Button"

const Message = () => {
  return (
    <section id="contact" className="border-4 p-2 md:p-5 lg:w-7/12">
      <h2 className="font-pixelify text-2xl md:text-5xl lg:text-7xl font-bold mb-8">
        Send me a message
      </h2>

      <form
        action="https://formsubmit.co/loejstarc@gmail.com"
        method="POST"
        className="flex flex-col gap-4"
      >
        <div className="flex gap-4 flex-wrap">
          <div className="flex flex-col flex-1 min-w-[240px]">
            <label
              htmlFor="name"
              className="font-pixelify font-bold text-2xl lg:text-3xl"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="outline-none border-4 p-2 font-pixelify text-xl bg-accent"
              required
            />
          </div>

          <div className="flex flex-col flex-1 min-w-[240px]">
            <label
              htmlFor="email"
              className="font-pixelify font-bold text-2xl lg:text-3xl"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="outline-none border-4 p-2 font-pixelify text-xl bg-accent"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="message"
            className="font-pixelify font-bold text-2xl lg:text-3xl"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="outline-none border-4 p-2 font-pixelify text-xl h-32 resize-none scrollbar bg-accent"
            required
            minLength={10}
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button text="Reset" type="reset" />
          <Button text="Get in Touch" type="reset" />
        </div>
      </form>
    </section>
  )
}

export default Message
