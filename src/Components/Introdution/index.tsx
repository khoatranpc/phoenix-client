import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { img3 } from '../../Assets/img';
import { sexydance } from '../../Assets/img';
import { ScrollToTop } from '../../utils/ScrollSmooth';
import './style.scss';

const listServices = [
    {
        title: 'Bộ môn nhảy Sexy Dance:',
        summaryContent: 'với bộ môn này bạn có khiến cho cơ thể mình dẻo dai, có được thần thái tự tin, linh hoạt,..'
    },
    {
        title: 'Bộ môn nhảy Shuffle Dance:',
        summaryContent: 'chủ yếu nhảy bằng chân, chính vì vậy nó giúp cho cấu trúc xương chắc khỏe hơn, giúp ngăn ngừa loãng xương hay thiếu hụt canxi chủ yếu ở phần xương hông.'
    },
    {
        title: 'Bộ môn nhảy Tik Tok Dance:',
        summaryContent: 'nếu bạn là người hay chơi Tik Tok thì bộ môn này phù hợp với bạn. Ở đây sẽ hướng dẫn bạn những xu hướng nhảy trên Tik Tok mới nhất để bạn có một clip ngàn view.'
    },
    {
        title: 'Bộ môn nhảy Kpop Dance:',
        summaryContent: 'Tín đồ Kpop thì không thể bỏ qua được lớp học này. Đây cũng là một sân chơi cho những bạn đam mê nhảy cover, hay muốn học Kpop Dance từ cơ bản.'
    },
    {
        title: 'Bộ môn nhảy Jazz Funk Dance:',
        summaryContent: 'Tại lớp học này bạn không chỉ được hướng dẫn những bước nhảy mang phong cách Sexy, phá cách, tự do mà còn được học cách kể chuyện bằng cơ thể của mình, linh hoạt hơn trong việc biểu lộ diễn đạt tình cảm.'
    },
    {
        title: 'Bộ môn Girl Style:',
        summaryContent: 'Với bộ môn này bạn sẽ được học những điệu nhảy mang tính chất vừa sexy, vừa mạnh mẽ nhưng cũng thể hiện rõ được cá tính của phái nữ'
    },
    {
        title: 'Bộ môn Sexy Fitness:',
        summaryContent: 'Nếu bạn thích có một thân hình gợi cảm, quyến rũ thì đây đích thực là bộ môn dành cho bạn.'
    },
]
const Introdution = () => {
    const { t } = useTranslation();
    useEffect(() => {
        document.title = `Phoenix | ${t('A_2')}`;
        ScrollToTop()
    }, [t])
    return (
        <div className="container-introdution">
            <h1 className="title-introdution">{t('A_2')}</h1>
            <div className="content">
                <div className="content-intro summary">
                    <h2 className="title">{t('A_64')}</h2>
                    <b>Phoenix Dance Studio</b>&nbsp;
                    được biết đến là một đơn vị dạy nhảy hiện đại và múa cổ trang, đương đại được thành lập vào tháng 3 năm 2020. Sau 4 tháng hoạt động với sự yêu mến của học viên tại Hà Nội, Phoenix Dance Studio đã tiếp tục phát triển cơ sở thứ 2 tại đây với mong muốn có thể đem đến sân chơi cho những bạn trẻ đam mê lĩnh vực này và mong muốn đem đến những lớp học thú vị để mọi người có thể cải thiện vóc dáng, sức khỏe của mình.
                    <br />
                    <br />

                    Mục tiêu của chúng tôi là có thể trở thành đơn vị uy tín, chất lượng có cơ sở trải dài khắp Hà Nội. Cùng với đó đem lại một cái nhìn mới mẻ về bộ môn này với sức khỏe, sự tự tin cho mọi người khi tham gia khóa học.
                    <br />
                    <br />

                    Với đội ngũ giáo viên trẻ, có nhiều kinh nghiệm trình diễn, giảng dạy và khả năng tạo ra các video Youtube nghìn view, chúng tôi tin rằng Phoenix Dance Studio là lựa chọn hoàn hảo nhất dành cho bạn!
                    <img src={img3} alt="phoenix" className="summary" />
                </div>
                <div className="content-intro service">
                    <h2 className="title">{t('A_63')}</h2>
                    <p>Để cung cấp đầy đủ các dịch vụ với chất lượng tốt nhất, chúng tôi luôn cố gắng phát triển và hoàn thiện các dịch vụ, cơ sở. Bên cạnh đó giảng viên của chúng tôi luôn có tinh thần ham học hỏi, trau dồi kiến thức để đem đến cho học viên những lớp học thú vị.</p>
                    <p>Hiện tại <strong>Phoenix Dance Studio</strong> đang cung cấp các khóa học từ cơ bản đến nâng cao và các dịch vụ sau:</p>
                    <h2>Dạy nhảy hiện đại:</h2>
                    <ul className="list-service">
                        {listServices.map((item) => {
                            return (
                                <li key={item.title}><strong>{item.title}</strong> {item.summaryContent}</li>
                            )
                        })}
                    </ul>
                    <img src={sexydance} alt={t('A_63')} className="img-service" />
                </div>
                <div className="ending-write">
                    <h2 className="title">{t('A_65')}</h2>
                    <p>Với các lớp học chất lượng từ cơ sở vật chất đến giáo viên, nhân viên chúng tôi có thể tự tin mình có thể giúp bạn giải tỏa, thư giãn về đầu óc, tăng cường sức khỏe dẻo dai và yêu thích hơn bộ môn mình đang theo học.</p>
                    <i><strong>Phoenix Dance Studio hy vọng rằng những thành phẩm cuối khóa học của học viên chúng tôi sẽ giúp bạn có thêm động lực, mong muốn tham gia lớp học. Bên cạnh đó những thành phẩm này có thể chứng minh được năng lực, chất lượng của Phoenix Dance Studio.</strong></i>
                </div>
            </div>
        </div>
    )
}
export default Introdution;