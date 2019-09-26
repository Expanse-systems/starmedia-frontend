import * as React from 'react';

interface ISocialIconsSpriteProps {
  [prop: string]: any
}

const SocialIconsSprite: React.FC<ISocialIconsSpriteProps> = () => {
  return (
    <svg style={{display:'none'}} width="0" height="0" className="hidden">
      <symbol width="24px" height="24px"  viewBox="0 0 8 18" fill="inherit" xmlns="http://www.w3.org/2000/svg" id="facebook">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.697 0h-.954c-2.652 0-4.81 2.202-4.81 4.91v2.07H.304A.309.309 0 0 0 0 7.292v2.483c0 .171.136.31.304.31h1.63v7.603c0 .172.136.312.304.312h2.43c.169 0 .305-.14.305-.312v-7.603h2.418a.307.307 0 0 0 .305-.31V7.292a.309.309 0 0 0-.305-.312H4.973V4.91c0-.996.794-1.806 1.769-1.806h.955c.167 0 .303-.14.303-.311V.309A.307.307 0 0 0 7.697 0z"
          fill="inherit"
        />
      </symbol>
      <symbol
        viewBox="0 0 16 15"
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
        id="in"
      >
        <path
          d="M3.857 1.75c0 .97-.744 1.748-1.94 1.748h-.022C.743 3.498 0 2.719 0 1.75 0 .756.767 0 1.94 0s1.896.756 1.917 1.75zM.201 15h3.43V4.88H.202V15zm11.85-10.357c-1.82 0-2.634.98-3.092 1.671v.033h-.022a.163.163 0 0 0 .022-.033V4.881H5.53c.045.948 0 10.119 0 10.119h3.43V9.349c0-.305.021-.603.113-.821.249-.602.814-1.232 1.759-1.232 1.242 0 1.74.93 1.74 2.29V15H16V9.198c0-3.11-1.693-4.555-3.949-4.555z"
          fill="inherit"
        />
      </symbol>
      <symbol viewBox="0 0 12 20" fill="inherit" xmlns="http://www.w3.org/2000/svg" id="ok">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.685 12.111c-.62.636-1.363 1.096-2.19 1.417-.781.302-1.637.455-2.485.558.128.138.188.207.268.287 1.151 1.157 2.307 2.309 3.454 3.47.39.394.473.885.257 1.347-.235.502-.762.833-1.278.796-.327-.022-.583-.185-.81-.413-.868-.875-1.753-1.734-2.604-2.624-.247-.259-.366-.21-.585.014-.873.9-1.761 1.787-2.654 2.668-.401.396-.878.468-1.344.241-.494-.24-.808-.745-.784-1.252.017-.344.186-.606.421-.84 1.138-1.14 2.275-2.28 3.41-3.42.076-.075.146-.155.255-.274-1.55-.16-2.946-.543-4.141-1.48-.15-.115-.303-.229-.437-.357-.524-.504-.577-1.081-.163-1.676.355-.505.95-.643 1.568-.353.12.06.233.129.342.206 2.23 1.533 5.291 1.575 7.528.068.222-.17.46-.308.734-.38.534-.137 1.032.061 1.318.526.327.536.324 1.056-.08 1.471zM5.96 10.123C3.196 10.113.93 7.82.947 5.05.962 2.25 3.23-.009 6.02 0c2.796.007 5.041 2.296 5.027 5.126-.014 2.765-2.296 5.007-5.088 4.997zM6 2.583a2.469 2.469 0 0 0-2.476 2.503 2.462 2.462 0 0 0 2.49 2.452 2.458 2.458 0 0 0 2.458-2.482A2.465 2.465 0 0 0 6 2.584z"
          fill="inherit"
        />
      </symbol>
      <symbol viewBox="0 0 19 11" fill="inherit" xmlns="http://www.w3.org/2000/svg" id="vk">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.174 8.579c-.414-.496-.884-.943-1.338-1.374-.162-.153-.33-.31-.49-.47-.463-.452-.48-.624-.114-1.136.253-.355.522-.71.783-1.054.235-.311.478-.632.712-.956l.048-.067c.447-.619.908-1.258 1.154-2.03.064-.203.13-.502-.022-.752-.154-.252-.45-.329-.66-.362a1.658 1.658 0 0 0-.304-.022L15.02.354h-.024c-.443 0-.74.209-.91.638-.164.41-.342.846-.547 1.26-.406.827-.923 1.78-1.67 2.575l-.031.033c-.089.096-.188.201-.261.201-.011 0-.024 0-.038-.005-.154-.06-.258-.437-.254-.609V4.44l-.002-3.384c0-.01 0-.023-.002-.034-.075-.55-.24-.892-.862-1.016A.307.307 0 0 0 10.37 0H7.33c-.495 0-.768.203-1.024.504-.07.082-.214.25-.142.453.072.207.307.25.384.265.38.072.595.306.655.712.106.708.12 1.463.042 2.374-.022.255-.065.45-.136.618-.017.04-.075.165-.135.165-.019 0-.073-.006-.173-.074-.236-.161-.408-.393-.61-.678a16.004 16.004 0 0 1-1.756-3.262C4.25.625 3.906.37 3.464.364A78.032 78.032 0 0 0 .821.366C.466.37.221.477.091.684c-.13.203-.12.472.025.798 1.17 2.603 2.23 4.497 3.44 6.138.846 1.15 1.695 1.946 2.672 2.503 1.029.59 2.182.877 3.525.877.152 0 .31-.005.469-.011.78-.039 1.07-.32 1.106-1.081.018-.39.06-.798.251-1.146.12-.218.233-.218.27-.218a.5.5 0 0 1 .253.093c.17.111.316.259.435.39.113.124.224.248.335.374.24.268.489.547.748.81.567.578 1.192.832 1.91.779h2.681l.017-.002a.777.777 0 0 0 .634-.407c.17-.298.166-.679-.008-1.02a5.428 5.428 0 0 0-.68-.982z"
          fill="inherit"
        />
      </symbol>
      <symbol viewBox="0 0 18 13" fill="inherit" xmlns="http://www.w3.org/2000/svg" id="youtube">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.298 1.116C16.648.323 15.45 0 13.158 0H4.842C2.498 0 1.278.344.632 1.188 0 2.011 0 3.223 0 4.901v3.198C0 11.35.749 13 4.842 13h8.316c1.987 0 3.088-.285 3.8-.985C17.688 11.298 18 10.127 18 8.1V4.901c0-1.77-.049-2.989-.702-3.785zm-5.742 5.826L7.78 8.967a.568.568 0 0 1-.57-.018.6.6 0 0 1-.28-.51V4.4a.6.6 0 0 1 .28-.51.568.568 0 0 1 .568-.019l3.777 2.013a.598.598 0 0 1 .313.528.6.6 0 0 1-.312.529z"
          fill="inherit"
        />
      </symbol>
    </svg>
  );
};

export default SocialIconsSprite;
