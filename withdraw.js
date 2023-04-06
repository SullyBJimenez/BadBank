function Withdraw(){
    const ctx = React.useContext(UserContext);
    return (
        <h1>Withdraw from your account<br/>
            <Balance/>
        </h1>
    )
}