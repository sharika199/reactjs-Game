// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {emojiDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const onClickEmojiCard = () => {
    clickEmoji(id)
  }
  return (
    <li className="b">
      <button type="button" onClick={onClickEmojiCard} className="bb">
        <img src={emojiUrl} alt={emojiName} className="gg" />
      </button>
    </li>
  )
}

export default EmojiCard
