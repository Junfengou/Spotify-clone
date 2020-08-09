import React from 'react';
import "./Sidebar.css";
import SideBarOption from './SideBarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
//importing the useDataLayerValue so we can use dispatch
import {useDataLayerValue} from './DataLayer'; 

function Sidebar() {

    //By using this, we can bring the playlist directly down here to the sidebar component
    const [{playlists}, dispatch] = useDataLayerValue();
    console.log(playlists);

    return (
        <div className="sidebar">
            <img className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""
            />

            <SideBarOption Icon={HomeIcon} title="Home" />
            <SideBarOption Icon={SearchIcon} title="Search" />
            <SideBarOption Icon={LibraryMusicIcon} title="Your Library" />
            
            <br />
            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />

            {playlists?.items?.map(playlists => (
               <SideBarOption title={playlists.name} /> 
            ))}
        </div>
    )
}

export default Sidebar
