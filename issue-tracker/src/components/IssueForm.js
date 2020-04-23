import React from 'react';

const IssueForm = (props) => {
    return (<form onSubmit={props.addIssue}>
        <input type="text" value={props.currentIssue}
        onChange={props.updateIssue}
        ></input>
        <button type="submit" > Add Issue</button>
    </form>);
}

export default IssueForm;