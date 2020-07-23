module.exports = {
  langName: "ru",

  cantUseCommandInDM: `> :x: Вы не можете использовать данную команду в личных сообщениях.`,
  clickHere: "(нажмите сюда)",
  daysAgo: days => `(${days} дней назад)`,
  commandUsage: function (prefix, command) {
    let usages = command.usage;
    let str = `>>> Как использовать: `;
    if (usages instanceof Array) {
      usages = usages.map(u => `${prefix}${command.name} ${this[u]}`).join("\n");
      str += `\`\`\`\n${usages}\n\`\`\``
    }
    else str += `\`${prefix}${command.name} ${this[command.usage]}\``;

    return str;
  },
  botDontHavePerms: perm => `У меня нет права \"${perm}\" для выполнения этого действия.`,
  userIsOwner: "Этот пользователь является владельцем сервера",
  roleHigher: "Роль этого пользователя выше моей роли.",
  somethingWentWrong: "Что-то пошло не так. Попробуйте позже снова.",
  dontHavePerms: ":x: Вы не имеете нужных прав на использование этой команды.",
  missingPermission: perm => `Нужное право: \`${perm}\``,
  errorInCommand: cmd => `:x: Ошибка в команде \`${cmd}\`:`,
  cooldown: left => `> :warning: Вам нужно подождать ${left} секунд, чтобы использовать эту команду снова.`,
  cantFindUser: "> :x: Пользователь не найден.",

  permissions: {
    kickMembers: "Выгонять участников",
    banMembers: "Банить участников",
    manageRoles: "Управлять ролями",
    manageMessages: "Управлять сообщениями",
    manageGuild: "Управлять сервером",
  },

  status: {
    online: "В сети",
    idle: "Не активен",
    dnd: "Не беспокоить",
    offline: "Не в сети",
  },

  basicGroup: "Основные",
  devGroup: "Команды разработчика",
  moderationGroup: "Модерация",
  settingsGroup: "Настройки",
  utilityGroup: "Утилиты",
  funGroup: "Развлекательные",
  
  avatarDescription: "Показывает ваш аватар, либо аватар указанного пользователя.",
  avatarUsage: "[пользователь: id, упоминание либо тег]",
  avatarUsageServer: "server",
  avatarUser: user => `Аватар ${user.tag}:`,
  serverIcon: "Иконка сервера:",

  helpDescription: "Показывает информацию о командах бота.",
  helpUsage: "[команда]",
  helpCommandDoesntExist: cmd => `Команды **${cmd}** не существует.`,
  helpCommandDoesntExistDesc: prefix => `Введите ${prefix}help для получения списка всех команд.`,
  helpCommandEmbedTitle: cmd => `Справка по команде \`${cmd}\`:`,
  helpCommandUsage: "Как использовать:",
  helpTitle: "Команды бота:",
  helpTip: prefix => `Хотите получить информацию о какой-либо команде? Используйте ${prefix}help [команда]`,

  inviteDescription: "Ссылка-приглашение бота и приглашение на сервер поддержки.",
  inviteBotInvite: "Ссылка на приглашение бота:",
  inviteSupportServer: "Сервер codename_yey:",

  pingDescription: "Показывает задержку бота до серверов Discord'а.",
  pingMeasuring: "Измеряется...",
  pingBotLatency: latency => `Задержка бота ${latency} мс.`,
  pingWebSocketLatency: latency => `Задержка WebSocket ${latency} мс.`,

  serverDescription: "Показывает информацию о сервере.",
  serverOwner: "Владелец:",
  serverRegion: "Регион:",
  serverMembers: "Участников:",
  serverMembersTotal: "всего",
  serverMembersBots: "ботов",
  serverMembersOnline: "в сети",
  serverMembersIdle: "не активны",
  serverMembersDND: "не беспокоить",
  serverMembersOffline: "не в сети",
  serverChannels: "Каналов:",
  serverChannelsCategories: "категорий",
  serverChannelsText: "текстовых",
  serverChannelsVoice: "голосовых",
  serverTotalRoles: "Кол-во ролей:",
  serverCreatedAt: "Создан:",
  serverVerificationLevel: "Уровень проверки:",
  verificationLevel: [
    "Отсутствует",
    "Низкий",
    "Средний",
    "Высокий",
    "Очень высокий",
  ],

  statsDescription: "Показывакт статистику бота.",
  statsTitle: "Статистика бота",
  statsUptime: "Аптайм:",
  statsServers: "Кол-во серверов:",
  statsUsers: "Кол-во пользователей:",
  statsPlatform: "Платформа:",
  statsVersions: "Версии:",

  userDescription: "Показывает информацию о вас или о указанном пользователе.",
  userUsage: "[пользователь: id, упоминание или тег]",
  userStatus: "Статус:",
  userRegisteredAt: "Зарегистрировался:",
  userJoinedAt: "Вошел на этот сервер:",
  userRoles: "Роли:",
  userBot: "Бот?",
  userBotDefine: bot => bot ? "Да" : "Нет",
  userCustomStatus: "Пользовательский статус:",
  userWatching: "Смотрит:",
  userListening: "Слушает:",
  userStreaming: "Стримит:",
  userPlaying: "Играет в:",

  evalDescription: "Выполняет JavaScript-код",
  evalUsage: "<код>",

  reloadDescription: "Перезагружает команду.",
  reloadUsage: "<команда>",
  reloadCmdDoesntExist: command => `> :x: Команды \`${command}\` не существует.`,
  
  setgameDescription: "Задает статус бота.",
  setgameUsage: "[-w, --watching] [-l, --listening] <текст>",

  updateDescription: "git pull",
  updateSuccess: ":white_check_mark: Успешно обновлено.",

  banDescription: "Банит указанного пользователя.\nЭта команда требует право \"Банить пользователей.\"",
  banUsage: "<пользователь> [причина]",
  banSuccess: user => `${user.tag} забанен`,
  reason: reason => `Причина: ${reason || "отсутствует"}`,
  cantBanYourself: `> :x: Вы не можете забанить самого себя.`,
  cantBanBot: `> :x: Вы не можете забанить бота.`,
  banFail: ":x: Не удалось забанить этого пользователя.",

  hackbanDescription: "Хакбанит указанного пользователя.\nЭта команда требует право \"Банить пользователей\".",
  hackbanUsage: "<id пользователя> [причина]",
  hackbanSuccess: id => `:white_check_mark: Пользователь с ID \`${id}\` был успешно хакбанен.`,
  hackbanFail: ":x: Не удалось забанить этого пользователя.",
  
  kickDescription: "Кикает указанного пользователя.\nЭта команда требует право \"Выгонять участников\".",
  kickUsage: "<пользователь> [причина]",
  cantKickYourself: "> :x: Вы не можете кикнуть самого себя.",
  cantKickBot: "> :x: Вы не можете кикнуть бота.",
  kickSuccess: user => `${user.tag} был кикнут`,
  kickFail: ":x: Не удалось кикнуть этого пользователя.",

  muteDescription: "Мутит указанного пользователя.\nРазрешенные настройки времени: Ns, Nm, Nh, Nd, где N - число.\nЭта команда требует право \"Выгонять участников\".",
  muteUsage: "<пользователь> [время] [причина]",
  cantMuteYourself: "> :x: Вы не можете замутить самого себя.",
  cantMuteBot: "> :x: Вы не можете замутить бота.",
  userAlreadyMuted: "> :x: Данный пользователь уже замучен.",
  muteSuccess: user => `${user.tag} был замучен`,
  canUnmuteSuggestion: prefix => `Вы можете размутить пользователя, введя ${prefix}unmute <пользователь>.`,
  muteFail: ":x: Не удалось замутить этого пользователя.",

  purgeDescription: "Удаляет указанное кол-во сообщений в канале.\nЭта команда требует право \"Управлять сообщениями\".",
  purgeUsage: "<amount>",
  amountIsNaN: "> :x: Указанное кол-во не является числом.",
  notLessThan1Msg: "> :x: Не менее, чем 1 сообщение за раз.",
  notMoreThan100Msgs: "> :x: Не более 100 сообщений за раз",
  purgeSuccess: amount => `:white_check_mark: Успешно удалено ${amount} сообщений.`,
  msgWillBeDeleted: "Это сообщение будет автоматически удалено через 5 секунд.",
  purgeFailed: ":x: Не удалось удалить сообщения.",

  unmuteDescription: "Размутит указанного пользователя.\nЭта команда требует право \"Выгонять участников\".",
  unmuteUsage: "<пользователь>",
  userNotMuted: "> :x: Данный пользователь не был замучен.",
  unmuteSuccess: user => `${user.tag} был размучен`,
  unmuteFail: ":x: Не удалось размутить этого пользователя.",

  warnDescription: "Выдает предупреждение указанному пользователю. Также позволяет вам смотреть свои предупреждения или предупреждения указанного пользователя, либо же удалять их (если у вас есть право \"Выгонять участников\".)",
  warnUsage: "[-l, --list [пользователя]] [-d, --delete <id>] <пользователь> [причина]",
  totalWarns: number => `Всего предупреждений: ${number}`,
  invalidID: "> :x: Неверный ID предупреждения.",
  warnOnAnotherServer: "> :x: Это предупреждение расположено на другом сервере.",
  warnDeleteSuccess: id => `> :white_check_mark: Удалено предупреждение с ID ${id}`,
  cantWarnYourself: "> :x: Вы не можете выдать предупреждение самому себе.",
  cantWarnBot: "> :x: Вы не можете выдать предупреждение боту.",
  cantWarnAdmin: "> :x: Вы не можете выдать предупреждение администратору.",
  warnSuccess: user => `Выдано предупреждение пользователю ${user.tag}`,
  warnID: id => `ID предупреждения: ${id}`,

  autoroleDescription: "Позволяет вам включить или выключить автороль.\nТребует право \"Управлять сервером\".",
  autoroleUsage: "[роль: id, имя либо \"disable\" для выключения]",
  autorole: "Автороль",
  autoroleEnabled: role => `Автороль включена для роли **${role}**.`,
  autoroleDisabled: "Автороль выключена.",
  autoroleTip: prefix => `Вы можете включить или сменить автороль, введя ${prefix}autorole [роль], либо ${prefix}autorole для выключения.`,
  autoroleDisableSuccess: "> :white_check_mark: Автороль была выключена.",
  autoroleSuccess: role => `> :white_check_mark: Автороль была успешно включена для роли **"${role}"**.`,
  invalidRoleID: "> :x: Неправильное имя или ID роли.",

  modlogsDescription: "Позволяет вам управлять каналом для логов модерации.\nТребует право \"Управлять сервером\".",
  modlogsUsage: "[канал: упоминание или id]",
  modlogs: "Логи модерации",
  modlogsEnabled: channel => `Логи модерации включены в канале ${channel}.`,
  modlogsDisabled: "Логи модерации выключены.",
  modlogsTip: prefix => `Вы можете включить логи модерации либо изменить канал для них, введя ${prefix}modlogs [канал], или ${prefix}modlogs disable для выключения.`,
  modlogsDisableSuccess: "> :white_check_mark: Логи модерации были выключены.",
  modlogsSuccess: channel => `> :white_check_mark: Логи модерации были включены в канале **\"${channel}\"**.`,
  invalidChannel: "> :x: Указан неверный канал.",
  modlogsDontHavePerms: ":x: Я не имею прав на отправление сообщений в этом канале",
  modlogsDontHavePermsDesc: "Пожалуйста, выдайте мне права \"Отправлять сообщения\" и \"Встраивать ссылки\" в этом канале, потом попробуйте снова.",

  _8ballDescription: "Магический шар-восьмерка.",
  _8ballUsage: "<вопрос>",
  magicballAnswer: ":8ball: Магический шар ответил:",
  yourQuestion: "Ваш вопрос:",

  pollDescription: "Создает опрос из реакций (до 10 вариантов ответа).\nЕсли указан ключ -d или --delete, то пробует удалить ваше сообщение.",
  pollUsage: "[-d, --delete] <вопрос> <ответы>",
  noAnswers: "> :warning: В опросе должен быть как минимум один вариант ответа.",
  pollNotMoreThan10Answers: "> :x: Не более 10 вариантов ответа.",
  startedBy: user => `Начал опрос: ${user.tag}`,
  pollCantDeleteMessage: "> :warning: Невозможно удалить сообщение, проверьте разрешения бота",

  qrDescription: "Генерирует QR-код из вашего текста.",
  qrUsage: "<текст>",
  generationTime: time => `Заняло ${time} мс.`,

  sayDescription: "Говорит ваш текст в эмбеде.",
  sayUsage: "<text>",

  udDescription: "Ищет определение слова в Urban Dictionary (на английском языке).",
  udUsage: "<слово>",
  wordNotFound: ":x: Слово не найдено.",
  cantShowDefinition: ":x: Я не могу показать это определение здесь.",
  linkToDefinition: link => `Ссылка на определение: [(нажмите сюда)](${link})`,
  example: "Example:",
  author: author => `Author: ${author}`,

  languageDescription: "Меняет ваш язык.",
  languageUsage: "[язык]",
  availableLanguages: "Доступные языки:",
  yourLanguage: "Ваш язык:",
  languagesTip: prefix => `Вы можете сменить язык, введя ${prefix}language [язык]`,
  langDoesntExist: "> :x: Данного языка не существует.",
  langSuccess: name => `> :white_check_mark: Ваш язык был изменен на \`${name}\`.`,

  randomDescription: "Генерирует случайное число в заданном диапазоне.\nЕсли одно число предоставлено, генерирует в диапазоне от 1 до заданного числа.\nЕсли 2 числа предоставлено, генерирует в диапазоне от меньшего до большего числа.",
  randomUsageMax: "<макс>",
  randomUsageMinMax: "<мин> <макc>",
  notANumber: "> :x: Не число.",
  
  xkcdDescription: "Получает случайный комикс xkcd (на англ. языке).",

  roleDescription: "Показывает информацию о указанной роли.",
  roleUsage: "<роль: id, имя или упоминание>",
  roleNotFound: "> :x: Роль не найдена.",
  roleColor: "Цвет:",
  yesNo: what => what ? "Да" : "Нет",
  roleMentionable: "Упоминаемая?",
  roleCreatedAt: "Создана:",

  supportDescription: "Отправляет вопрос на сервер поддержки.\nОбратите внимание, что вам может быть запрещено использование этой команды за флуд/спам/т.п.",
  supportUsage: "<вопрос>",
  supportBan: reason => `> :x: Вам запрещено использовать эту команду. Причина: ${reason || "отсутствует"}`,
  emptyQuestion: "> :warning: Вопрос не может быть пустым.",
  supportSuccess: "> :white_check_mark: Ваш вопрос был успешно отправлен на сервер поддержки. Пожалуйста, ожидайте ответ, это обычно занимает от 5 до 10 минут.",

  respondDescription: "Отвечает на вопрос",
  respondUsage: "<id> <ответ>",
  respondInvalidID: "> :x: Неправильный ID.",
  receivedAnswer: "На ваш вопрос пришел ответ:",
  respondQuestion: "Ваш вопрос:",

  remindmeDescription: "Задает напоминание.\nРазрешенные настройки времени: Ns, Nm, Nh, Nd, где N - число.",
  remindmeUsage: "<время> <текст>",
  remindmeInvalidTime: "> :x: Неправильно указано время.",
  notMoreThan7Days: "> :warning: Вы можете задать напоминание на не более чем 7 дней.",
  textCantBeEmpty: "> :x: Текст не может быть пустым.",
  remindmeSuccess: "> :white_check_mark: Напоминание успешно задано.",
  reminder: "Напоминание:",

  decodeqrDescription: "Декодирует QR-код из изображения.",
  decodeqrUsage: "<изображение: url или вложение>",
  decodeqrInvalidURL: "> :x: Неправильный URL. Возможно, вы указали URL без протокола?",
  decodeqrFail: "> :x: Невозможно декодировать QR-код из этого изображения.",

  discriminatorDescription: "Показывает до 20 пользователей, которые имеют указанный дискриминатор.\nЕсли дискриминатор не указан, показывает пользователей с таким же дискриминатором, как у вас.",
  discriminatorUsage: "[дискриминатор]",
  invalidDiscriminator: "> :x: Вы указали неправильный дискриминатор. Дискриминаторы должны быть в диапазоне от 0001 до 9999",
  discriminatorEmbedTitle: discrim => `Пользователи с дискриминатором #${discrim}:`,
  discriminatorNoUsersFound: "Сейчас я не вижу пользователей с таким дискриминатором.",
};
