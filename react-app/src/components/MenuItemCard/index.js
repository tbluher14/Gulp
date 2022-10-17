
import './MenuItemCard.css'
const MenuItemCard = ({menuItems}) => {


    return (

    <div className='menu-item-card'>
        <h1>Menu: </h1>
        <img
        src={`https://www.seriouseats.com/thmb/5avoLwcpCbqBCZX6Gnp24QNIBZ8=/1500x844/smart/filters:no_upscale()/20210607-INNOUTBURGERS-JANJIGIAN-seriouseats-23-b2b8a505ff414272aab71590a8985b85.jpg`}
        alt=' '
        className='menu-item-image'
        >

        </img>
        {menuItems.name}
        Price:
        {menuItems.price}
    </div>
    )
}


export default MenuItemCard
