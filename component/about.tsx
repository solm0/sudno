'use client'

import { useState } from "react"

export default function About({setAbout}: {setAbout: (about: boolean) => void}) {
  const [content, setContent] = useState(true);

  return (
    <div
      className={`absolute w-80 text-xs break-keep font-mono text-center p-8 bg-black border border-white flex flex-col items-center justify-between ${content ? 'h-72' : 'h-full'}`}
      onClick={() => setAbout(false)}
    >
      {content ? (
        <>
          <p>들리는 음악은 벨라루스의 포스트펑크 밴드 Молчат Дома의 곡 Судно이다. 해당 곡의 가사는 러시아 시인 Борис Рыжий의 시를 인용한 것이다.</p>
          <p>‘에나멜 칠 요강, 쪽창, 탁자, 침대, ... ... .’ 시인의 묘사에 따라 방을 재현하였다.</p>
          <p>시구들을 모아 시를 완성해 보자.</p>
          <p className="opacity-40">제 18회 조형전 - 코로로 정솔미 1/2</p>
        </>
      ): (
        <>
          <h2>Credits</h2>
          <p>침대 3D 모델: "Metal Bed" (https://skfb.ly/o99WT) by teofaron is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
          <p>창문 3D 모델: "Broken Window 05" (https://skfb.ly/6U8ns) by Game Ready Art is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
          <p>바닥 텍스쳐 이미지: Wood Planks Grey(https://polyhaven.com/a/wood_planks_grey) by Rob Tuytel</p>
          <p>의자 3D 모델: "Wooden Chair" (https://skfb.ly/Y6uU) by toAflame is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
          <p>책상 3D 모델: "Old metal desk" (https://skfb.ly/6vvvw) by Sam Constance is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
          <p>전등 3D 모델: "Ceiling Lamp" (https://skfb.ly/osWCJ) by holgcool is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
          <p>세면대 3D 모델: "Source Bathroom Sink" (https://skfb.ly/6WOLV) by Yaiyeondurising is licensed under Creative Commons Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/).</p>
          <p>거울 3D 모델: "Dirty mirror Lowpoly(Vray)" (https://skfb.ly/oINyI) by mama619 is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
          <p>문 3D 모델: "Static Wood Door" (https://skfb.ly/6WYFW) by KurtSteiner is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).</p>
          <p>벽 텍스쳐 이미지: Painted Plaster Wall(https://polyhaven.com/a/painted_plaster_wall) by Amal Kumar</p>
        </>
      )}
      <button
        onClick={(e) => {e.stopPropagation(); setContent(!content)}}
        className="px-4 py-0.5 border border-white hover:bg-white hover:text-black"
      >
        {content ? 'credit' : 'about' }
      </button>
    </div>
  )
}