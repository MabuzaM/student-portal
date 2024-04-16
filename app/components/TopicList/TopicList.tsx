import React, { useEffect, useState } from 'react';
import './TopicList.scss';
import { ModuleTopic } from '@/app/utils/types';
import { changeProgressBackground, handleSelectTopic } from '@/app/utils/handlerFunctions';

export const TopicList = ({moduleTopics = [], onTopicClick}) => {
  const handleSelectedTopicChange = (newTopic: ModuleTopic) => {
    const selectedTopic = newTopic;
    
    onTopicClick(selectedTopic);
  }
  return (
    <article className="TopicList">
      <table className="TopicList_table">
        <tbody>
          {
            moduleTopics.map((moduleTopic: ModuleTopic, index: number) => {

              const { topic, topicProgress } = moduleTopic;
              return (
                <tr
                  className="TopicList_row" key={topic.slice(0, 4) + index}
                >
                  <td                    
                    className="TopicList_name"
                  >
                    <span className="TopicList_column">{index++}</span>

                    <button
                      type='button'
                      className="TopicList__column"
                      value={moduleTopic}
                      onClick={() => {
                        handleSelectedTopicChange(moduleTopic)
                        console.log(moduleTopic)
                      }}
                    >
                      <div>
                        {topic}
                      </div>
                      

                      <div className="TopicList_progress">
                        <span className="TopicList_column">{0 | topicProgress}</span>
                        <span
                          className="TopicList_color"
                          style={{ backgroundColor: changeProgressBackground(topicProgress) }}
                          ></span>
                      </div>
                    </button>
                  </td>

                  {/* <td className="TopicList_progress">
                    <span
                      className="TopicList_column"                 
                    >{0 | topicProgress}</span>
                    <span className="TopicList_column">
                    <div
                      className="TopicList_color"
                      style={{ backgroundColor: changeProgressBackground(topicProgress) }}
                      ></div>
                    </span>
                  </td> */}
                </tr>
              );
              })
          }
        </tbody>   
      </table>
    </article>
  );
};
