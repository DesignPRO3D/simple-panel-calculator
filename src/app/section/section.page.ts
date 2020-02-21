import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.page.html',
  styleUrls: ['./section.page.scss'],
})
export class SectionPage implements OnInit {

  toggleDrawings = false;
  _segment = 'A';

  _sectionLength = null;
  _postDiam = null;
  _panelNum = null;
  _panelLength = 0;


  _postNum = 0;
  _length = 0; //panel length

  _barDiam = null;
  _barNum = null;

  _gap = 0;
  _startPoints = [];

  constructor() { }

  ngOnInit() {
  }

  onToggleDrawings() {
    this.toggleDrawings = !this.toggleDrawings;
  }

  onCalculateData() {
    const _sectionLength = parseFloat(this._sectionLength);
    const _postDiam = parseFloat(this._postDiam);
    const _panelNum = parseInt(this._panelNum);
    let _length = 0;
    let _postNum = 0;

    const _startArr = [];
    const _barDiam = parseFloat(this._barDiam);
    const _barNum = parseInt(this._barNum);

    // Calculate panel length and post number
    if (this._segment === 'A') {
      _postNum = _panelNum + 1;
    } else if (this._segment === 'B') {
      _postNum = _panelNum;
    } else {
      _postNum = _panelNum - 1;
    }

    _length = ( _sectionLength - _postNum * _postDiam ) / _panelNum;


    // Calculate gap and start points
    const _gap = (_length - _barNum * _barDiam) / (_barNum + 1);
    let _start = _gap + _barDiam / 2;
    const _center = _gap + _barDiam;

    _startArr.push(Number(_start.toFixed(0)));
    for (let i = 1; i < _barNum; i++) {
      _start +=  _center;
      _startArr.push(Number(_start.toFixed(0)));
    }

    if (_length > 0 && _length < _sectionLength) {
      this._length = Number(_length.toFixed(1));
      this._postNum = _postNum;
    } else {
      this._length = 0;
      this._postNum = 0
    }

    if(_gap > 0 && _gap < _length) {
      this._gap = Number(_gap.toFixed(1));
      this._startPoints = _startArr;
    } else {
      this._gap = 0;
      this._startPoints = [];
    }
  }

}
