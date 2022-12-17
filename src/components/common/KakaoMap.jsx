import React, { useState, useEffect } from 'react';

const { kakao } = window;

const KakaoMap = (props) => {

    //주소 정보 넣을 state
    const [addressInfo, setAddressInfo] = useState({});

    const geocoder = new kakao.maps.services.Geocoder();

    const callback = function (result, status) {
        if (status === kakao.maps.services.Status.OK) {
            //주소 정보 넣기
            setAddressInfo(result[0].road_address);
        }
    };

    useEffect(() => {
        //주소 정보 검색
        geocoder.addressSearch(props.address, callback);

    }, [props.address])

    useEffect(() => {
        if (addressInfo !== null) {
            //맵 보여줄 div
            const container = document.getElementById('map');
            //맵 옵션
            const options = {
                center: new kakao.maps.LatLng(addressInfo.y, addressInfo.x),
                level: 3
            };
            //맵 생성
            const map = new kakao.maps.Map(container, options);

            // 마커를 생성
            const marker = new kakao.maps.Marker({
                position: options.center,
            });

            // 마커를 지도 위에 표시
            marker.setMap(map);
        }
    }, [addressInfo])

    return (
        // addressInfo !== null &&
        <div id='map' style={{ width: props.width, height: props.height }} />
    );
};

export default KakaoMap;