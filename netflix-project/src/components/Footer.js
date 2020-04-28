import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Icon } from 'react-icons-kit';
import { iosWorld } from 'react-icons-kit/ionicons/iosWorld';
import { arrowSortedDown } from 'react-icons-kit/typicons/arrowSortedDown';
import { generateMedia } from 'styled-media-query';


class Footer extends Component {
    state = {
        langContent: false
    }
    handleToggle = e => {
        e.preventDefault();
        this.setState({
            langContent: !this.state.langContent
        })
    }
    render() {
        return (
            <FooterContainer>
                <span style={{marginLeft:'15%', fontSize:'1.125rem'}}>Questions? Call <Link>1-0800-1234-1234</Link></span>
                <div className="footer-columns">
                    <ul>
                        <li>
                            <Link>FAQ</Link>
                        </li>
                        <li>
                            <Link>Investors Relations</Link>
                        </li>
                        <li>
                            <Link>Ways to watch</Link>
                        </li>
                        <li>
                            <Link>CVoorperate info</Link>
                        </li>
                        <li>
                            <Link>NetFlix originals</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>3</Link>
                        </li>
                        <li>
                            <Link>222222222s</Link>
                        </li>
                        <li>
                            <Link>33333355555555555h</Link>
                        </li>
                        <li>
                            <Link>C333333333333o</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>F1111</Link>
                        </li>
                        <li>
                            <Link>fffff</Link>
                        </li>
                        <li>
                            <Link>Wagfggggh</Link>
                        </li>
                        <li>
                            <Link>CVsdfhdfsghgf</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link>FAfghQ</Link>
                        </li>
                        <li>
                            <Link>Invsdfhsdghs</Link>
                        </li>
                        <li>
                            <Link>Wadfhshgch</Link>
                        </li>
                        <li>
                            <Link>Legal</Link>
                        </li>
                    </ul>
                    {/* Language Button */}
                    <div className="lang-btn" onClick={this.handleToggle}>
                        <Icon icon={iosWorld} size={20} />
                        &nbsp;&nbsp;English&nbsp;&nbsp;
                        <Icon icon={arrowSortedDown} />
                    </div>
                </div>
                {/* Toggle Language Content */}
                {this.state.langContent && (
                    <div className="lang-toggle">
                        <ul>
                            <li>English</li>
                        </ul>
                        <ul>
                            <li>Korean</li>
                        </ul>
                    </div>
                )}
                <span style={{ marginLeft: '15%', fontSize:'0.9rem' }}>Netflix New Zealand</span>
            </FooterContainer>
        )
    }
}

export default Footer;

const customMedia = generateMedia({
    tablet: '740px',
    mdDesktop:'1000px'
})

const FooterContainer = styled.footer`
background: var(--main-deep-dark);
padding-top: 10rem;
padding-bottom: 3rem;
color: #999;

.footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan("tablet")`
        grid-template-columns: repeat(2, 1fr);
    `}
}

ul li {
    list-style: none;
    line-height: 2.5;
}

a {
    color: #999;
}

a:hover {
    text-decoration: underline;
    cursor: pointer;
}

// Language Button
.lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 2rem;
    cursor: pointer;
}

// Toggle Language Content
.lang-toggle {
    margin-left: 15%;
    position: absolute;
    margin-top: -2rem;
}

.lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
    &:hover {
        background: #0085ff;
        color: #fff;
    }
}

`;