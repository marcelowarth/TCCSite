'use strict';

var numComandos = 0;

$(function() {

  var $frmDataXML = $('#dataXML');
  $frmDataXML.submit(function(e) {
    return e.preventDefault();
  });

  var $frmSolutionXML = $('#solutionXML');
  $frmSolutionXML.submit(function(e) {
    return e.preventDefault();
  });

  $('button[name=addInput]').click(function() {
    var $entrada = $('<input>').attr('type', 'number').addClass('form-control');
    $('div[name=inputValues]').append($entrada);
  });

  $('button[name=removeInput]').click(function() {
    $('div[name=inputValues] :last-child').remove();
  });

  $('button[name=addOutput]').click(function() {
    var $saida = $('<input>').attr('type', 'number').addClass('form-control');
    $('div[name=outputValues]').append($saida);
  });

  $('button[name=removeOutput]').click(function() {
    $('div[name=outputValues] :last-child').remove();
  });

  $('button[name=addCommand]').click(function() {
    var $comando = $('<div>').attr('name', 'comando').addClass('form-inline')
                      .append($('<label>').text((numComandos + 1) + ". "))
                        .append($('<select>').addClass('form-control').attr('onchange', 'verifyDisabled(this)').attr('name','selectCommand_' + (numComandos + 1))
                          .append($('<option>', {'value': 'input'}).text("Pegar Entrada"))
                          .append($('<option>', {'value': 'output'}).text("Levar á Saída"))
                          .append($('<option>', {'value': 'add'}).text("Some com"))
                          .append($('<option>', {'value': 'sub'}).text("Diminuir com"))
                          .append($('<option>', {'value': 'copyTo'}).text("Copia para"))
                          .append($('<option>', {'value': 'copyFrom'}).text("Copia de"))
                          .append($('<option>', {'value': 'jumpTo'}).text("Pule para"))
                          .append($('<option>', {'value': 'ifZero'}).text("Se zero"))
                          .append($('<option>', {'value': 'ifNeg'}).text("Se negativo"))
                          .append($('<option>', {'value': 'bumpUp'}).text("Aumente"))
                          .append($('<option>', {'value': 'bumpUp'}).text("Diminua")))
                        .append($('<input>').addClass('form-control').attr('type', 'number').attr('min', 1).attr('value', 1).attr('disabled', true));
    numComandos++;
    $('div[name=commands]').append($comando);
  });

  $('button[name=removeCommand]').click(function() {
    $('div[name=commands]').children('div[name=comando]:last').remove();
    numComandos--;
  });

});

function verifyDisabled(objeto) {
  var desabilita = ["input", "output"];
  if(!(objeto.selectedIndex in desabilita)) {
    objeto.nextSibling.disabled = false;
  } else {
    objeto.nextSibling.disabled = true;
  };
};
