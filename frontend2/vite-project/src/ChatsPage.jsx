import {PrettyChatWindow} from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style ={{ height: '100vh'}}>
            <PrettyChatWindow
            projectId='71505975-e249-4f62-8f78-f3efadc9ccb8'
            username={props.user.username}
            secret={props.user.secret}
            style = {{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage;