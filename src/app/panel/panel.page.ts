import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.page.html',
  styleUrls: ['./panel.page.scss'],
})
export class PanelPage implements OnInit {
  toggleDrawings = true;

  _length = null;
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
    const _startArr = [];
    const _length = parseFloat(this._length);
    const _barDiam = parseFloat(this._barDiam);
    const _barNum = parseInt(this._barNum);

    const _gap = (_length - _barNum * _barDiam) / (_barNum + 1);
    let _start = _gap + _barDiam / 2;
    const _center = _gap + _barDiam;

    _startArr.push(Number(_start.toFixed(0)));
    for (let i = 1; i < _barNum; i++) {
      _start +=  _center;
      _startArr.push(Number(_start.toFixed(0)));
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
