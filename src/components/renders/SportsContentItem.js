// IMPORTS

import React from "react"

import Responsive from "../structural/Responsive"

import FilteredImage from "../stylistic/FilteredImage"
import { HorizontalFade, VerticalFade } from "../stylistic/Fade"
import { ManualCarousel } from "../stylistic/Carousel"

import EaglesImage1 from "../../assets/images/sports/content/eagles1.png"
import EaglesImage2 from "../../assets/images/sports/content/eagles2.png"
import EaglesImage3 from "../../assets/images/sports/content/eagles3.png"
import EaglesImage4 from "../../assets/images/sports/content/eagles4.png"

import SixersImage1 from "../../assets/images/sports/content/sixers1.png"
import SixersImage2 from "../../assets/images/sports/content/sixers2.png"
import SixersImage3 from "../../assets/images/sports/content/sixers3.png"

import PhilliesImage1 from "../../assets/images/sports/content/phillies1.png"
import PhilliesImage2 from "../../assets/images/sports/content/phillies2.png"
import PhilliesImage3 from "../../assets/images/sports/content/phillies3.png"
import PhilliesImage4 from "../../assets/images/sports/content/phillies4.png"

import FlyersImage1 from "../../assets/images/sports/content/flyers1.png"
import FlyersImage2 from "../../assets/images/sports/content/flyers2.png"
import FlyersImage3 from "../../assets/images/sports/content/flyers3.png"
import FlyersImage4 from "../../assets/images/sports/content/flyers4.png"

import UnionImage1 from "../../assets/images/sports/content/union1.png"
import UnionImage2 from "../../assets/images/sports/content/union2.png"
import UnionImage3 from "../../assets/images/sports/content/union3.png"

// COMPONENTS

const SportsContentItem = ({ name, imgs, description }) => {
    return (
        <article className={"team-container"}>
            {
                // Responds to changes in screen height so fade trigger changes dynamically
            }
            <Responsive render={({ height }) => {
                return (
                    <VerticalFade verticalFocus={height}>
                        <h2>
                            {
                                name
                            }
                        </h2>
                    </VerticalFade>
                )
            }} />
            <div className={"content-wrapper"}>
                {
                    // Responds to changes in screen width and height so content can fade and display dynamically
                }
                <Responsive render={({ width, height }) => {
                    return (width > 1150) ? (
                        // Computer screen layout (description next to image carousel)
                        <React.Fragment>
                            <div className={"team-picture-container"}>
                                <HorizontalFade direction={"left"} verticalFocus={height + 300}>
                                    <div style={{ height: 500 }}>
                                        <ManualCarousel itemData={imgs} render={(item, index) => {
                                            return (
                                                <FilteredImage key={index} src={item} alt={name} filters={{
                                                    brightness: 85,
                                                    saturate: 150,
                                                    contrast: 120
                                                }} />
                                            )
                                        }} width={Math.min(width - 40, 720)} borderRadius />
                                    </div>
                                </HorizontalFade>
                            </div>
                            <div style={{ height: 500 }}>
                                <HorizontalFade direction={"right"} verticalFocus={height + 300}>
                                    <div className={"content-container"} style={{ height: 460 }}>
                                        <label>
                                            {
                                                description
                                            }
                                        </label>
                                    </div>
                                </HorizontalFade>
                            </div>
                        </React.Fragment>
                    ) : (
                        // Phone screen layout (description below image carousel)
                        <React.Fragment>
                            <div className={"team-picture-container"}>
                                <VerticalFade verticalFocus={height + 200}>
                                    <div style={{ height: 500 }}>
                                        <ManualCarousel itemData={imgs} render={(item, index) => {
                                            return (
                                                <FilteredImage key={index} src={item} alt={name} filters={{
                                                    brightness: 85,
                                                    saturate: 150,
                                                    contrast: 120
                                                }} />
                                            )
                                        }} width={Math.min(width - 40, 720)} borderRadius />
                                    </div>
                                </VerticalFade>
                            </div>
                            <div className={"content-container"}>
                                <VerticalFade verticalFocus={height}>
                                    <label>
                                        {
                                            description
                                        }
                                    </label>
                                </VerticalFade>
                            </div>
                        </React.Fragment>
                    )
                }} />
            </div>
        </article>
    )
}

const sportsContentData = [
    {
        name: "The Eagles",
        imgs: [
            EaglesImage1,
            EaglesImage2,
            EaglesImage3,
            EaglesImage4
        ],
        description: (
            <React.Fragment>
                The Philadelphia Eagles are our city's <b>football team</b>. Originally established in 1933, they are a member of the National Football League. For home games, they play on <b>Lincoln Financial Field</b>.
                <br />
                In 2018, the team finally took home their <b>first Superbowl win</b> against the Patriots.
                <br />
                After ending the 58 year drought the entire city was elated, and thousands of people took to the streets celebrating in various organized gathering.
            </React.Fragment>
        )
    },
    {
        name: "The Sixers",
        imgs: [
            SixersImage1,
            SixersImage2,
            SixersImage3
        ],
        description: (
            <React.Fragment>
                The Sixers are Philly's <b>basketball team</b>. They were founded in 1946 and are a member of the National Basketball Association.
                <br />
                The team has won <b>3 NBA championships</b>:
                <ul>
                    <li>1955</li>
                    <li>1967</li>
                    <li>1983</li>
                </ul>
                As of 2022, they have some of the best players in the league, including:
                <ul>
                    <li>Joel Embiid</li>
                    <li>James Harden</li>
                    <li>Tyrese Maxey</li>
                    <li>Tobias Harris</li>
                </ul>
            </React.Fragment>
        )
    },
    {
        name: "The Phillies",
        imgs: [
            PhilliesImage1,
            PhilliesImage2,
            PhilliesImage3,
            PhilliesImage4
        ],
        description: (
            <React.Fragment>
                Founded all the way back in 1883, the Phillies are our city's <b>baseball team</b> that competes in Major League Baseball.
                <br />
                The Phillies have won <b>2 championship</b>:
                <ul>
                    <li>1980</li>
                    <li>2008</li>
                </ul>
                The Phillies also have <b>9 east division titles</b>:
                <br />
                1976, 1977, 1978, 1980, 1983, 1993, 2007, 2008, 2009, 2010, and 2011.
            </React.Fragment>
        )
    },
    {
        name: "The Flyers",
        imgs: [
            FlyersImage1,
            FlyersImage2,
            FlyersImage3,
            FlyersImage4
        ],
        description: (
            <React.Fragment>
                The Flyers are Philadelphia's <b>ice hockey</b> team. Founded in 1967, they play in the National Hockey League.
                <br />
                Early on in the team's history, they were able to win <b>2 Stanley Cups</b>:
                <ul>
                    <li>1974</li>
                    <li>1975</li>
                </ul>
                Among the teams after the National Hockey League's expansion, they are the <b>first ever team to win consecutive Stanley Cups</b>.
            </React.Fragment>
        )
    },
    {
        name: "The Union",
        imgs: [
            UnionImage1,
            UnionImage2,
            UnionImage3
        ],
        description: (
            <React.Fragment>
                Founded somewhat recently in 2008, the The Union is Philadelphia's <b>soccer team</b>.
                <br />
                The team has made it to the <b>U.S. Open Cup finals</b> a few times:
                <ul>
                    <li>2014</li>
                    <li>2015</li>
                    <li>2018</li>
                </ul>
                Additionally they made the <b>MLS playoffs</b> several times:
                <ul>
                    <li>2011</li>
                    <li>2016</li>
                    <li>2018</li>
                    <li>2019</li>
                </ul>
                In 2020, they won their <b>first title</b> at the MLS championship.
            </React.Fragment>
        )
    }
]

// EXPORTS

export { SportsContentItem, sportsContentData }