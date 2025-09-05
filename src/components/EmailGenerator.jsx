import React, { useState } from "react";

const EmailGenerator = () => {
  const [formData, setFormData] = useState({
    receiverName: "",
    receiverEmail: "",
    subject: "Application for React js developer Position",
    companyName: "",
  });

  const [emailOutput, setEmailOutput] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { receiverName, receiverEmail, subject, companyName } = formData;

    const position = subject
      .replace("Application for", "")
      .replace("Position", "")
      .trim();

    const emailText = `
<b>Subject:</b> ${subject} | <b>2 YOE</b><br/>
<b>To:</b> ${receiverEmail}<br/><br/>

Dear ${receiverName},<br/><br/>

I hope you're doing well. My name is <b>Jagannath Behera</b>, and I'm reaching out to express my interest in any <b>${position}</b> opportunities at <b>${companyName}</b>.<br/><br/>

I have <b>2 year</b> of hands-on experience in frontend development, specializing in <b>React.js, Next.js, React Native, TypeScript, and Tailwind CSS</b>, with a foundational understanding of <b>Node.js</b>. I’ve worked on projects focused on building intuitive, responsive user interfaces and integrating modern web functionalities.<br/><br/>


I’ve attached my <a href="https://drive.google.com/file/d/1IA6jb0eznoKvol9IqCm1PGW9OO-HbHVk/view" target="_blank" title="Resume">Resume</a> for your review.  
If my profile aligns with your requirements, I would be grateful for an opportunity to interview with <b>${companyName}</b>.  
<br/><br/>

Best regards,<br/>
<b>Jagannath Behera</b><br/>
📧 <a href="mailto:jagannathbehera3249@gmail.com">jagannathbehera3249@gmail.com</a><br/>
📞 <a href="tel:+917853808105">7853808105</a>
`.trim();

    setEmailOutput(emailText);
    setCopied(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.write([
        new ClipboardItem({
          "text/html": new Blob([emailOutput], { type: "text/html" }),
          "text/plain": new Blob(
            [
              document.createRange().createContextualFragment(emailOutput)
                .textContent,
            ],
            { type: "text/plain" }
          ),
        }),
      ]);
      setCopied(true);
    } catch (err) {
      console.error("Copy failed", err);
      setCopied(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        padding: "2rem",
        fontFamily: "Arial, sans-serif",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          maxWidth: "500px",
          flex: "1",
          minWidth: "300px",
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
            <option>Application for Developer developer Position</option>
            <option>Application for Junior Frontend Developer Position</option>
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
            boxShadow: "0 0 5px rgba(0,0,0,0.05)",
            maxWidth: "700px",
            flex: "1",
            minWidth: "300px",
            position: "relative",
            overflowX: "auto",
            wordBreak: "break-word",
          }}
        >
          <div
            style={{
              fontSize: "0.925rem",
              lineHeight: "1.6",
              fontFamily: "Arial, sans-serif",
            }}
            dangerouslySetInnerHTML={{ __html: emailOutput }}
          />

          {/* Inline style to override bold size */}
          <style>
            {`b { font-weight: bold; font-size: inherit !important; }`}
          </style>

          <button
            onClick={handleCopy}
            style={{
              marginTop: "1rem",
              padding: "8px 16px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {copied ? "Copied!" : "Copy to Clipboard"}
          </button>
        </div>
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
