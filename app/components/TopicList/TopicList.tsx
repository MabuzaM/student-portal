import React from 'react';
import './TopicList.scss';
import axios from 'axios';

export const TopicList = () => {
  return (
    <article className="TopicList">
      <table className="TopicList_table">
        <tbody>
          <tr className="TopicList_row">
            <div className="TopicList_name">
              <td className="TopicList_column">1</td>
              <td className="TopicList_column">Introduction to HTML and the Web</td>
            </div>

            <div className="TopicList_progress">
              <td className="TopicList_column">100%</td>
              <td className="TopicList_column">
                <div className="TopicList_color TopicList_progress--green"></div>
              </td>
            </div>
          </tr>

          <tr className="TopicList_row">
            <div className="TopicList_name">
              <td className="TopicList_column">2</td>
              <td className="TopicList_column">Tags, Attributes and Elements</td>
            </div>

            <div className="TopicList_progress">
              <td className="TopicList_column">60%</td>
              <td className="TopicList_column">
                <div className="TopicList_color TopicList_progress--orange"></div>
              </td>
            </div>
          </tr>

          <tr className="TopicList_row">
            <div className="TopicList_name">
              <td className="TopicList_column">3</td>
              <td className="TopicList_column">Page title</td>
            </div>

            <div className="TopicList_progress">
              <td className="TopicList_column">10%</td>
              <td className="TopicList_column">
                <div className="TopicList_color TopicList_progress--red"></div>
              </td>
            </div>
          </tr>

          <tr className="TopicList_row">
            <div className="TopicList_name">
              <td className="TopicList_column">4</td>
              <td className="TopicList_column">Paragraphs</td>
            </div>

            <div className="TopicList_progress">
              <td className="TopicList_column">0%</td>
              <td className="TopicList_column">
                <div className="TopicList_color TopicList_progress--red"></div>
              </td>
            </div>
          </tr>      
        </tbody>   
      </table>
    </article>
  );
};
