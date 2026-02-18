export const BaseButton = ({onClick, label, icon})=>{
    return <button onClick={onClick} style={{
        display: 'flex',
        columnGap: 16,
        background: 'transparent',
        border: 'none',
        cursor: 'pointer'
        
    }}>
        <img src={icon} width={24} />
         {label}
    </button>
}
