import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

import headneckDB from '../contents/headneckDB';
import torsoDB from '../contents/torsoDB';
import upperExtDB from '../contents/upperExtDB';
import lowerExtDB from '../contents/lowerExtDB'

import './BodyContentDetail.css'



function BodyContentDetail() {

  const [ isLoading, setIsLoading ] = useState(true);

  const params = useParams();
  const [param, setParam] = useState(params.bodyDetailItem)
  const [pathCategory, setPathCategory] = useState(window.location.pathname.split('/')[window.location.pathname.split('/').length - 2])
  const [pathContent, setPathContent] = useState('')


  console.log('pathCategory??', pathCategory)
  // Find current path category
  useEffect(() => {
    async function fetchPathContent () {
      if ( pathCategory === 'headneck' ) {
        await headneckDB.map(db => {
          if( db.url === param ){
            // setPathName(db.name)
            setPathContent(db)
            setIsLoading(false);
          } 
        })
      } else if ( pathCategory === 'torso' ) {
        await torsoDB.map(db => {
          if( db.url === param ){
            // setPathName(db.name)
            console.log('torso DB', db)
            setPathContent(db)
            setIsLoading(false);
          } 
        })
      } else if ( pathCategory === 'upperextremities' ) {
        await upperExtDB.map(db => {
          if( db.url === param ){
            // setPathName(db.name)
            setPathContent(db)
            setIsLoading(false);
          } 
        })
      } else if ( pathCategory === 'lowerextremities' ) {
        await lowerExtDB.map(db => {
          if( db.url === param ){
            // setPathName(db.name)
            setPathContent(db)
            setIsLoading(false);
          } 
        })
      }
    }
    fetchPathContent()
    // const timer = setTimeout(() => {
    //   setIsLoading(false);
    // }, 1000);
    // return () => clearTimeout(timer);
  }, [])

  console.log(pathContent, 'pathContent')


  
  
  


  return (
    <div className="contentDetail">

    { isLoading ?
      <div className="contentDetailContainer">
        <p>Loading...</p>
      </div>
    :
      <div className="contentDetailContainer">
        <Link to={`${pathCategory}`}>Back</Link>
        <h1>{pathContent.name}</h1>

        {/* Illustrations */}
        { pathContent.illustrations && pathContent.illustrations.length >= 1 ?
        <div className="content--section">
          <div className="contentDetail--section-content">
            {pathContent.illustrations.map((illust, index) => {
              return (
                <div>
                  <img src={illust.url} alt={illust.caption} />
                  <p className="smallText">Image {index + 1}. {illust.caption}</p>
                  <br />
                </div>
              )
            })}
          </div>
        </div>
        :null }

        {/* Materials */}
        <div className="content--section">
          <h3>{pathContent.materials.title}</h3>
          <div className="contentDetail--section-content">
            { Object.keys(pathContent.materials.content).map((insert, index) => {
              return (
                <div key={insert}>
                  <strong className="smallText">{insert}</strong>
                  <p>{Object.values(pathContent.materials.content)[index]}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Region */}
        <div className="content--section">
          <h3>{pathContent.region.title}</h3>
          <div className="contentDetail--section-content">
            <p>{pathContent.region.content}</p>
          </div>
        </div>

        {/* Indications */}
        <div className="content--section">
          <h3>{pathContent.indications.title}</h3>
          <div className="contentDetail--section-content">
            <ul>
            {pathContent.indications.content.map(el => {
              return(
                <li key={el}>{el}</li>
              )
            })}
            </ul>
          </div>
        </div>

        {/* Contraindications */}
        <div className="content--section">
          <h3>Contraindications</h3>
          {pathContent.contraindications.map( el => {
            return (
              <div key={el.title} className="contentDetail--section-content">
                <h5>{el.title}</h5>
                <ul>
                  {el.content.map(elContent => (
                    <li key={elContent}>{elContent}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>


        {/* Positioning */}
        <div className="content--section">
          <h3>{pathContent.positioning.title}</h3>
          <div className="contentDetail--section-content">
            <p>{pathContent.positioning.content}</p>
          </div>
        </div>


        {/* Procedure */}
        <div className="content--section">
          <h3>{pathContent.procedure.title}</h3>
          <div className="contentDetail--section-content">
            <ol>
              {pathContent.procedure.content.map(el => {
                return(
                  <li key={el}>{el}</li>
                )
              })}
            </ol>
          </div>
        </div>


        {/* Pitfall */}
        <div className="content--section">
          <h3>{pathContent.pitfall.title}</h3>
          <div className="contentDetail--section-content">
            <ul>
              {pathContent.pitfall.content.map(el => {
                return(
                  <li key={el}>{el}</li>
                )
              })}
            </ul>
          </div>
        </div>


        {/* Citations */}
        { pathContent.citations && pathContent.citations.content.length >= 1 ?
        <div className="content--section">
          <h3>{pathContent.citations.title}</h3>
          <div className="contentDetail--section-content">
            <ul>
              {pathContent.citations.content.map(el => {
                return(
                  <li key={el}>{el}</li>
                )
              })}
            </ul>
          </div>
        </div>
        : null}
        

        {/* Extended references */}
        { pathContent.extendedRef && pathContent.extendedRef.content ? 
        <div className="content--section">
          <h3>{pathContent.extendedRef.title}</h3>
          <div className="contentDetail--section-content">
            <ul>
              {pathContent.extendedRef.content.map(el => {
                return(
                  <li key={el}>{el}</li>
                )
              })}
            </ul>
          </div>
        </div>
        : null}
        

        {/* Photos */}
        { pathContent.photos && pathContent.photos.length >= 1 ?
        <div className="content--section">
          <div className="contentDetail--section-content">
            {pathContent.photos.map((photo, index) => {
              return (
                <div>
                  <img src={photo.url} alt={photo.caption} />
                  <p className="smallText">Photo {index + 1}. {photo.caption}</p>
                  <br />
                </div>
              )
            })}
          </div>
        </div>
        : null}




      </div>
    }
      
    </div>
  )
}

export default BodyContentDetail