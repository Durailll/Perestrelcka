// разрешения
Damage.GetContext().FriendlyFire.Value =GameMode.Parameters.GetBool("Damage")
BreackGraph.OnlyPlayerBlocksDmg = true;
BreackGraph.WeakBlocks = false;
// делаем возможным ломать все блоки
BreackGraph.BreackAll = false;
// показываем количество квадов
Ui.GetContext().QuadsCount.Value = true;
// разрешаем все чистые блоки
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;
// вкл строительные опции
Build.GetContext().Pipette.Value = false;
Build.GetContext().FloodFill.Value = false;
Build.GetContext().FillQuad.Value = false;
Build.GetContext().RemoveQuad.Value = false;
Build.GetContext().BalkLenChange.Value = false;
Build.GetContext().FlyEnable.Value = false;
Build.GetContext().SetSkyEnable.Value = false;
Build.GetContext().GenMapEnable.Value = false;
Build.GetContext().ChangeCameraPointsEnable.Value = false;
Build.GetContext().QuadChangeEnable.Value = false;
Build.GetContext().BuildModeEnable.Value = false;
Build.GetContext().CollapseChangeEnable.Value = false;
Build.GetContext().RenameMapEnable.Value = false;
Build.GetContext().ChangeMapAuthorsEnable.Value = false;
Build.GetContext().LoadMapEnable.Value = false;
Build.GetContext().ChangeSpawnsEnable.Value = false;
Build.GetContext().BuildRangeEnable.Value = false;

// запрет нанесения урона
Damage.GetContext().DamageOut.Value = true;

// параметры игры
Properties.GetContext().GameModeName.Value = "GameModes/EDITOR";
// создаем команды
Teams.Add("Blue", "<size=44><color=#ff1bf6>НАËМНИКИ</color></size>", { w: 1 });
Teams.Add("Blue", "<size=44><color=#ff1bf6>Кинопленка</color></size>", { w: 1 });
Teams.Add("Blue", "<size=44><color=#ff1bf6>Советские</color></size>", { w: 1 });
Teams.Add("Blue", "<size=44><color=#ff1bf6>Разъезд</color></size>", { w: 1 });
Teams.Add("Blue", "<size=44><color=#ff1bf6>Дом быта</color></size>", { w: 1 });
Teams.Add("Blue", "<size=44><color=#ff1bf6>Хади Такташ</color></size>", { w: 1 });
Teams.Add("Blue", "<size=44><color=#ff1bf6>Универсам</color></size>", { w: 1 });

// разрешаем вход в команды по запросу
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// спавн по входу в команду
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});

// задаем подсказку
Ui.getContext().Hint.Value = "ВЫЖИВАЙ В ГОРОДЕ, СОЗДАВАЙ КОМАНДУ! ";

// конфигурация инвентаря
var roomInventory = Inventory.GetContext();
roomInventory.Main.Value = false;
roomInventory.MainInfinity.Value = false;
roomInventory.Secondary.Value = false;
roomInventory.Melee.Value = false;
roomInventory.Explosive.Value = false;
roomInventory.Build.Value = false;
roomInventory.BuildInfinity.Value = true;

// моментальный спавн
Spawns.GetContext().RespawnTime.Value = 2;

Players.Get("AAD18F7FB400BD5F").build.BuildRangeEnable.Value = true;
Players.Get("AAD18F7FB400BD5F"). Damage.DamageIn.Value = true;
// ????????? ???? ? ??????? ?? ???????  
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);  
Ui.GetContext().Hint.Value = player +" ку,как дела? ";  

if (player.id  == "AAD18F7FB400BD5F" || 
 player.id  == "AAA9FBB8CCA3CD90" || 
 player.id == "5303A9CB14240FFD" || 
 player.id == "48D8485E0DE1F45C" || player.id == "9EF7ADDA2CDE2F7D" || player.id == "C957E4E920E8ACD"){
player.Properties.Get("admin").Value = 2;
player.inventory.MainInfinity.Value = true;  
player.inventory.Main.Value = true;  
player.inventory.Melee.Value = true;  
player.inventory.Explosive.Value = true;  
player.inventory.Build.Value = true;  
player.inventory.BuildInfinity.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.SecondaryInfinity.Value = true; player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true;  
player.Build.FillQuad.Value = true;  
player.Build.RemoveQuad.Value = true;  
player.Build.BalkLenChange.Value = true;  
player.Build.FlyEnable.Value = true;  
player.Build.SetSkyEnable.Value = true;

player.Build.GenMapEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;  
player.Build.QuadChangeEnable.Value = true;  
player.Build.BuildModeEnable.Value = true;  
player.Build.CollapseChangeEnable.Value = true;  
player.Build.RenameMapEnable.Value = true;  
player.Build.ChangeMapAuthorsEnable.Value = true;  
player.Build.LoadMapEnable.Value = true;  
player.Build.ChangeSpawnsEnable.Value = true;  
player.Build.BuildRangeEnable.Value = true; 
player.Build.Pipette.Value = true;
player.Properties.Scores.Value += 99999999;
contextedProperties.GetContext(player).MaxHp.Value = 100;
contextedProperties.GetContext(player).SkinType.Value = 1;
contextedProperties.GetContext().MaxHp.Value = 60;
player.Properties.Get("статус").Value = "<color=Green>АДМИН</a>";


var adm = AreaPlayerTriggerService.Get("Adm"); 

adm.Tags = ["adm"];  
adm.Enable = true;  
adm.OnEnter.Add(function(player) {  
player.inventory.MainInfinity.Val
ue = true;  
player.inventory.Main.Value = true;  
player.inventory.Melee.Value = true;  
player.inventory.Explosive.Value = true;  
player.inventory.Build.Value = true;  
player.inventory.BuildInfinity.Value = true;
player.inventory.ExplosiveInfinity.Value = true;
player.inventory.SecondaryInfinity.Value = true; player.inventory.Secondary.Value = true;  player.Build.FloodFill.Value = true;  
player.Build.FillQuad.Value = true;  
player.Build.RemoveQuad.Value = true;  
player.Build.BalkLenChange.Value = true;  
player.Build.FlyEnable.Value = true;  
player.Build.SetSkyEnable.Value = true;

player.Build.GenMapEnable.Value = true;
player.Build.ChangeCameraPointsEnable.Value = true;  
player.Build.QuadChangeEnable.Value = true;  
player.Build.BuildModeEnable.Value = true;  
player.Build.CollapseChangeEnable.Value = true;  
player.Build.RenameMapEnable.Value = true;  
player.Build.ChangeMapAuthorsEnable.Value = true;  
player.Build.LoadMapEnable.Value = true;  
player.Build.ChangeSpawnsEnable.Value = true;  
player.Build.BuildRangeEnable.Value = true; 
player.Build.Pipette.Value = true;
players.Properties.Scores.Value += 99999999
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ АДМИНКУ"; 


var lolTrigger =  AreaPlayerTriggerService.Get("LOLTrigger")

lolTrigger.Tags = [LOLAreasTag];  
lolTrigger.Enable = true;  
lolTrigger.OnEnter.Add(function (player)         { player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ ВСЕ БЛОКИ=)";player.Properties.Immortality.Value = false;  
Spawns.GetContext().enable = true;  
lolTrigger.Enable = true;  
Player.inventory.Build.Value = true;  
Player.inventory.BuildInfinity.Value = true;  
Player.inventory.Build.BlocksSet.Value = true;  
lolTrigger.Enable = true;  
}); 
});  
 }  
});  
// ????? ?? ????? ? ???????  
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});  

//   
var des = "СЕРВЕР";   

var res = AreaPlayerTriggerService.Get("res");
res.Tags = ["res"];
res.Enable = true;
res.OnEnter.Add(function (player) {
Game.RestartGame();
resColor = { b: 1 };
});

// ��������� ���� � ��� �������
Teams.OnRequestJoinTeam.Add(function(player,team){Teams.Get("Blue").Add(player);
{
player.Properties.Get("статус").Value = "<color=Red>ИГРОК</a>";
}
});
// разрешаем вход в команды по запросу
Teams.OnRequestJoinTeam.Add(function(player,team){team.Add(player);});
// спавн по входу в команду
Teams.OnPlayerChangeTeam.Add(function(player){ player.Spawns.Spawn()});



// лидер борды
LeaderBoard.PlayerLeaderBoardValues = [ 
 { 
  Value: "Kills", 
  DisplayName: "<i><B>УБИТЫХ</B></i>", 
  ShortDisplayName: "<i><B>УБИТЫХ</B></i>" 
 },
 { 
  Value: "Scores", 
  DisplayName: "<i><B><color=lime>$</color></B></i>", 
  ShortDisplayName: "<i><B><color=lime>$</color></B></i>" 
 },
        {
                Value: "статус",
                DisplayName: "<color=Blue>СТАТУС</a>",
                ShortDisplayName: "<color=Blue>СТАТУС</a>"
        }
]; 
LeaderBoard.TeamLeaderBoardValue = { 
 Value: "Deaths", 
 DisplayName: "Statistics\Deaths", 
 ShortDisplayName: "Statistics\Deaths" 
}; 
// вес команды в лидерборде 
LeaderBoard.TeamWeightGetter.Set(function(team) { 
 return team.Properties.Get("Deaths").Value; 
}); 
// вес игрока в лидерборде 
LeaderBoard.PlayersWeightGetter.Set(function(player) { 
 return player.Properties.Get("Kills").Value; 
}); 
//                        
LeaderBoard.PlayersWeightGetter.Set(function(player) {
 return player.Properties.Get("Scores").Value;
});

// счетчик спавнов
Spawns.OnSpawn.Add(function(player) {
 ++player.Properties.Spawns.Value;
});
// счетчик смертей
Damage.OnDeath.Add(function(player) {
 ++player.Properties.Deaths.Value;
});
// счетчик убийств
Damage.OnKill.Add(function(player, killed) {
 if (killed.Team != null && killed.Team != player.Team) {
  ++player.Properties.Kills.Value;
  player.Properties.Scores.Value += 40;
 }
});

// задаем макс смертей команд
var maxDeaths = "<B>test</B>";
var maxDeaths2 = "v0.05";
Teams.Get("Red").Properties.Get("Deaths").Value = maxDeaths;
Teams.Get("Blue").Properties.Get("Deaths").Value = maxDeaths2;

// задаем что выводить вверху
Ui.GetContext().TeamProp1.Value = { Team: "Blue", Prop: "Deaths" };
Ui.GetContext().TeamProp2.Value = { Team: "Red", Prop: "Deaths" };



//двери
var adcTrigger =
AreaPlayerTriggerService.Get("статус:адм")
adcTrigger.Tags = ["статус:адм"];
adcTrigger.Enable = true;
adcTrigger.OnEnter.Add(function(player){
player.Properties.Get("статус").Value = "<size=30><color=#463bff>А</color><color=#832eba>Д</color><color=#c02175>М</color></size>";
});

//зона адм 
var adcTrigger = 
AreaPlayerTriggerService.Get("скин2") 
adcTrigger.Tags = ["скин2"]; 
adcTrigger.Enable = true; 
adcTrigger.OnEnter.Add(function(player){ 
player.contextedProperties.SkinType.Value = 2; 
player.Ui.Hint.Value = "ТЫ ПОЛУЧИЛ СКИН ТЮРЕМШИКА" 
}); 

//дверь
var props = Properties.GetContext(); 
var plrTrigger = AreaPlayerTriggerService.Get("PlrTrigger"); 
plrTrigger.Tags = ["upd"]; 
plrTrigger.Enable = true; 
plrTrigger.OnEnter.Add(function(player) { 
var j = Players.GetEnumerator(); 
var prop = player.Properties; 
if (prop.Get("admin").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
}else{ 
var m = []; 
while(j.moveNext()) { 
   m.push(j.Current.id); 
} 
if (props.Get("index").Value >= m.length) { 
      props.Get("index").Value = 0; 
} else {  props.Get("index").Value += 1; } 

var sPlayer = Players.Get(m[props.Get("index").Value]); 
player.Ui.Hint.Value = "Игрок: " + sPlayer.nickName + " выбран"; 
} 
}); 
//бан
var benTrigger = AreaPlayerTriggerService.Get("NextTrigger"); 
benTrigger.Tags = ["ben"]; 
benTrigger.Enable = true; 
benTrigger.OnEnter.Add(function(player) { 
  var j = Players.GetEnumerator(); 
  var prop = player.Properties; 
  if (prop.Get("admin").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
  } 
  else { 
    var m = []; 
    while(j.moveNext()) { 
      m.push(j.Current.id); 
    } 
    var sPlayer = Players.Get(m[props.Get("index").Value]); 
      sPlayer.Spawns.Enable = false; 
      sPlayer.Spawns.Despawn(); 
      player.Ui.Hint.Value = "Игрок " +  sPlayer.nickName + " забанен"; 

} 
}); 

var baTrigger = AreaPlayerTriggerService.Get("NexTrigger"); 
baTrigger.Tags = ["razBan"]; 
baTrigger.Enable = true; 
baTrigger.OnEnter.Add(function(player) { 
  var j = Players.GetEnumerator(); 
  var prop = player.Properties; 
  if (prop.Get("admin").Value != 2) { 
    player.Ui.Hint.Value = "Недостаточно прав!"; 
  } 
  else { 
    var m = []; 
    while(j.moveNext()) { 
      m.push(j.Current.id); 
    } 
    var sPlayer = Players.Get(m[props.Get("index").Value]); 
      sPlayer.Spawns.Enable = true; 
      sPlayer.Spawns.Spawn(); 
      player.Ui.Hint.Value = "Игрок " +  sPlayer.nickName + " разбанен"; 
} 
});
//бан
var lopTrigger = AreaPlayerTriggerService.Get("lopTrigger");
lopTrigger.Color = {g:1};
lopTrigger.Tags = ["втор"]; 
lopTrigger.Enable = true; 
lopTrigger.OnEnter.Add(function(player) { 
player.inventory.Secondary.Value = true;
player.Ui.Hint.Value = "вы взяли вторичное оружие";
});
//бан
var loTrigger = AreaPlayerTriggerService.Get("loTrigger");
loTrigger.Color = {g:1};
loTrigger.Tags = ["основ"]; 
loTrigger.Enable = true; 
loTrigger.OnEnter.Add(function(player) { 
player.inventory.Main.Value = true;
player.Ui.Hint.Value = "вы взяли основное оружие";
});
//выдача
var lotTrigger = AreaPlayerTriggerService.Get("lotTrigger");
lotTrigger.Color = {g:1};
lotTrigger.Tags = ["грен"]; 
lotTrigger.Enable = true; 
lotTrigger.OnEnter.Add(function(player) { 
player.inventory.Explosive.Value = true;
player.Ui.Hint.Value = "вы взяли гранату. ";
});
 
//бан
var props = Properties.GetContext();   
var plrTrigger = AreaPlayerTriggerService.Get("PlrTrigger");   
plrTrigger.Color = {r:1};
plrTrigger.Tags = ["upd"];   
plrTrigger.Enable = true;   
plrTrigger.OnEnter.Add(function(player) {   
var j = Players.GetEnumerator();   
var prop = player.Properties;   
if (prop.Get("admin").Value != 2) {   
    player.Ui.Hint.Value = "Нету прав!";   
}else{   
var m = [];   
while(j.moveNext()) {   
   m.push(j.Current.id);   
}   
if (props.Get("index").Value >= m.length) {   
      props.Get("index").Value = 0;   
} else {  props.Get("index").Value += 1; }   
  
var sPlayer = Players.Get(m[props.Get("index").Value]);   
player.Ui.Hint.Value = "Игрок: " + sPlayer.nickName + " выбран";   
}   
});   
  
var bonTrigger = AreaPlayerTriggerService.Get("NextTrigger");   
bonTrigger.Color = {r:1};
bonTrigger.Tags = ["bon"];   
bonTrigger.Enable = true;   
bonTrigger.OnEnter.Add(function(player) {   
  var j = Players.GetEnumerator();   
  var prop = player.Properties;   
  if (prop.Get("admin").Value != 2) {   
    player.Ui.Hint.Value = "Не ту прав!";   
  }   
  else {   
    var m = [];   
    while(j.moveNext()) {   
      m.push(j.Current.id);   
    }   
    var sPlayer = Players.Get(m[props.Get("index").Value]);
      sPlayer.Spawns.Enable = true;
      sPlayer.Spawns.Despawn();
      Teams.Get("Red").Add(sPlayer);
     
      player.Ui.Hint.Value = "Игрок " +  sPlayer.nickName + " был  забанен."; 
}   
});
// я топ
var инфаTrigger = 
AreaPlayerTriggerService.Get("инфаTrigger"); 
инфаTrigger.Tags = ["инфа"]; 
инфаTrigger.Enable = true; 
инфаTrigger.OnEnter.Add(function (player) { 

player.Ui.Hint.Value = "скоро будут добавлены магазин за в версий 0.20"; 
}); 

//выдача
var lotTrigger = AreaPlayerTriggerService.Get("lotTrigger");
lotTrigger.Color = {g:1};
lotTrigger.Tags = ["лоп"]; 
lotTrigger.Enable = true; 
lotTrigger.OnEnter.Add(function(player) { 
player.inventory.Melee.Value = true;
player.Ui.Hint.Value = "вы взяли лопату. ";
});
 