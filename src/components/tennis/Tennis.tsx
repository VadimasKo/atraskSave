import Sport     from '../sport/Sport'
import tennisImg from '../../assets/tennis.svg'

const tennisDescr = <p>
  tai sportas, kuris reikalauja <b>daug</b> fizinių jėgų, vikrumo ir <b>sumanumo.</b><br/>
  Mušdamas kamuoliuką <b>jau turi žinoti</b>, kurs jis nuskries, kaip į tai sureaguos varžovas.<br/>
  Visa tai lavina <b>mąstymą</b>, gerina <b>atmintį</b>ir, žinoma, <b>nuotaiką</b>.
</p>


const Tennis = () => {
  return (
    <Sport
      imgSrc={tennisImg}
      sportDescr={tennisDescr}
      sportName="Tenisas"
    />
  )
}

export default Tennis