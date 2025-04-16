import React, { useState } from "react";

const EmailGenerator = () => {
  const [formData, setFormData] = useState({
    receiverName: "",
    receiverEmail: "",
    subject: "Application for React js developer Position",
    companyName: "",
  });

  const [emailOutput, setEmailOutput] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { receiverName, subject, companyName } = formData;

    const emailText = `
<b>Subject:</b> ${subject}

Dear ${receiverName},

I hope you're doing well. My name is <b>Jagannath Behera</b>, and I'm reaching out to express my interest in any Frontend Developer opportunities at <b>${companyName}</b>.

I have <b>1 year</b> of hands-on experience in frontend development, specializing in <b>React.js, Next.js, React Native, TypeScript, and Tailwind CSS</b>, with a foundational understanding of <b>Node.js</b>. I’ve worked on projects focused on building intuitive, responsive user interfaces and integrating modern web functionalities.

I’ve attached my resume for your review. I would be grateful if you could consider me for any suitable openings within your team.

Thanks for your time, and I look forward to the opportunity to connect.

Best regards,  
Jagannath Behera  
📧 jagannathbehera3249@gmail.com  
📞 7853808105
    `.trim();

    setEmailOutput(emailText);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          marginBottom: "2rem",
        }}
      >
        <label>
          Receiver Name:
          <input
            type="text"
            name="receiverName"
            value={formData.receiverName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>

        <label>
          Receiver Email:
          <input
            type="email"
            name="receiverEmail"
            value={formData.receiverEmail}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>

        <label>
          Subject:
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option>Application for React js developer Position</option>
            <option>Application for Frontend developer Position</option>
            <option>Application for Devloper developer Position</option>
          </select>
        </label>

        <label>
          Company Name:
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>

        <button
          type="submit"
          style={{
            marginTop: "1rem",
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Generate Email
        </button>
      </form>

      {emailOutput && (
        <div
          style={{
            background: "#f8f9fa",
            padding: "1.5rem",
            borderRadius: "8px",
            whiteSpace: "pre-wrap",
            boxShadow: "0 0 5px rgba(0,0,0,0.05)",
            maxWidth: "700px",
          }}
          dangerouslySetInnerHTML={{ __html: emailOutput }}
        />
      )}
    </div>
  );
};

const inputStyle = {
  display: "block",
  width: "100%",
  marginTop: "0.5rem",
  marginBottom: "1rem",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

export default EmailGenerator;
