import React from 'react';
import './TopicList.scss';

export const TopicList = ({moduleTopics = []}) => {
  return (
    <article className="TopicList">
      <table className="TopicList_table">
        <tbody>
          {
            moduleTopics.map((moduleTopic: { topic: any; progress: any; }, index: number) => {

              const { topic, progress } = moduleTopic;
              return (
                <tr className="TopicList_row" key={index}>
                  <div className="TopicList_name">
                    <td className="TopicList_column">{index++}</td>
                    <td className="TopicList_column">{topic}</td>
                   </div>

                  <div className="TopicList_progress">
                    <td className="TopicList_column">{progress}</td>
                    <td className="TopicList_column">
                      <div className="TopicList_color TopicList_progress--green"></div>
                    </td>
                  </div>
                </tr>
              );
              })
          }
          

          {/* <tr className="TopicList_row">
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
          </tr>       */}
        </tbody>   
      </table>
    </article>
  );
};
