interface ButtonProps {
	text: string
}

const Button = ({ text }: ButtonProps) => <button type="button">{text}</button>

export default Button
