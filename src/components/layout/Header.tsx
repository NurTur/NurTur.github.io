import { useState } from 'react';

import { navigationConfig } from '@/utils/navConfigs';
import { Arrow, Logo } from '@/utils/svgs';

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (event: React.MouseEvent, name: string) => {
    event.preventDefault();

    if (activeItem === name) {
      setActiveItem('');
    } else {
      setActiveItem(name);
    }
  };

  return (
    <>
      <header id="nav-head" className="sej-header--outer">
        <div className="sej-header">
          <div className="sej-header--container container">
            <a aria-label="menu" href="#topmenubutton" className="menu-open-btn" onClick={() => setIsMobile(true)}>
              <span />
              <span />
              <span />
            </a>

            <a id="dlog" className="sej-logo" aria-label="Home Page" href="https://itometer.com">
              {Logo('#000000')}
            </a>
            <div className="sej-menu-items">
              <nav role="navigation" className={`sej-menu ${isMobile && 'active'}`}>
                <div className="sej-menu--mobile-head">
                  <div className="sej-menu--head-logo">
                    <a id="mblog" className="sej-logo-mob-h" aria-label="Home Page" href="https://itometer.com">
                      {Logo('#000000', 90, 90)}
                    </a>
                  </div>
                  <div
                    className="menu-close-btn"
                    role="button"
                    tabIndex={0}
                    onClick={() => setIsMobile(false)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') {
                        setIsMobile(false);
                      }
                    }}
                  >
                    <span />
                    <span />
                  </div>
                </div>
                <div className="sej-menu--mobile-body">
                  <ul id="main-navigation" className="sej-menu--nav">
                    {navigationConfig.map(item => {
                      return (
                        <li key={item.name} className={`has_child ${activeItem === item.name ? 'active' : ''}`}>
                          <a className="dark-link" data-ga={item.name} href={item.link} onClick={e => handleItemClick(e, item.name)}>
                            {item.name}
                            <span className="svg-icon">{Arrow()}</span>
                          </a>
                          <div className="sej-full-menu" style={{ display: activeItem === item.name ? 'block' : 'none' }}>
                            <div className="container">
                              <div className="sej-menu-col">
                                {item.firstColumn?.length > 0 && (
                                  <ul data-ga={item.name} className="sej-menu--sub">
                                    {item.firstColumn.map(col => (
                                      <li key={col.name}>
                                        <a className="dark-link" href={col.link}>
                                          {col.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {item.secondColumn?.length > 0 && (
                                  <ul data-ga={item.name} className="sej-menu--sub">
                                    {item.secondColumn.map(col => (
                                      <li key={col.name}>
                                        <a className="dark-link" href={col.link}>
                                          {col.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>

                              <div className="sej-menu-col sej-mcol-last">
                                <div className="sej-hbk">{item.secondPart}</div>
                              </div>
                            </div>
                          </div>
                        </li>
                      );
                    })}

                    <li>
                      <a className="dark-link" data-ga="news" href="/news">
                        News
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div className={`menu-overlay ${isMobile && 'active'}`} />
    </>
  );
}
