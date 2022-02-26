import InputField from "../UI/InputField";


const ContactForm: React.FC = () => {
    return (
        <form>
            <InputField inputType="text" inputId="name" inputName="senderName" />
            <InputField inputType="text" inputId="email" inputName="senderEmail" />
            <InputField inputType="text" inputId="subject" inputName="messageSubject" />
            <InputField inputType="textarea" inputId="content" inputName="messageContent" />
        </form>
    )
};

export default ContactForm;