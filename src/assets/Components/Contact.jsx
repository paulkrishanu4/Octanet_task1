import './Contact.css';

export const Contact = () => {
  return (
    <form>
      <h1>Feel Free To Reach Out!</h1>
      <div className="parent2">
        <div className="info">
            <label for="first-name">First-Name*:</label>
            <input type="text" placeholder="First Name"></input>
            <label for="last-name">Last-Name*:</label>
            <input type="text" placeholder="Last Name"></input>
            <label for="email">Email:</label>
            <input type="email" placeholder="Email-id"></input>
            <label for="phone">Phone-no*:</label>
            <input type="text" placeholder="Phone Number"></input>
        </div>
        <div className="mssg">
          <label for="messege">messege*</label>
          <textarea rows="4"></textarea>
        </div>
      </div>
      <button>Submit</button>
    </form>
  )
}
