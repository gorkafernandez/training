import "./FaqItem.css";
import PropTypes from "prop-types";

import { useState } from "react";

const FaqItem = (props) => {
	const [show, setShow] = useState(false);
	const [edit, setEdit] = useState(false);
	const [question, setQuestion] = useState("");
	const [answer, setQuestionAnswer] = useState("");

	const toggle = () => {
		setShow(!show);
	};
	const onDelete = () => {
		console.log("button Clicked");
		props.onDelete(props.index);
	};
	const onEdit = () => {
		setEdit(true);
		setQuestionAnswer(props.answer);
		setQuestion(props.question);
	};
	const onChangeAnswer = (e) => {
		setQuestionAnswer(e.target.value);
	};
	const onChangeQuestion = (e) => {
		setQuestion(e.target.value);
	};

	const onSave = (e) => {
		e.preventDefault();
		setEdit(false);
		props.onEdit(props.index, question, answer);
	};
	return (
		<>
			{edit ? (
				<li className="faq-item">
					<form onSubmit={onSave}>
						<label>
							Question:
							<input
								name="question"
								value={question}
								onChange={onChangeQuestion}
							/>
						</label>
						<label>
							Answer:
							<textarea
								name="answer"
								value={answer}
								onChange={onChangeAnswer}
							/>
						</label>
						<input type="submit" value="Save" />
					</form>
				</li>
			) : (
				<li className="faq-item">
					<h2 className="question" onClick={toggle}>
						{props.question}
					</h2>
					{show && <p>{props.answer}</p>}
					<button onClick={onDelete}>Delete</button>
					<button onClick={onEdit}>Edit</button>
				</li>
			)}
		</>
	);
};
FaqItem.propTypes = {
	question: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
	onDelete: PropTypes.func.isRequired,
	onEdit: PropTypes.func.isRequired,
};

export default FaqItem;
