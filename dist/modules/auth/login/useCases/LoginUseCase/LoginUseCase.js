"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.LoginUseCase = void 0;
var AppError_1 = require("../../../../../erros/AppError");
var client_1 = require("../../../../../prisma/client");
var moment_1 = __importDefault(require("moment"));
var LoginUseCase = /** @class */ (function () {
    function LoginUseCase() {
    }
    LoginUseCase.prototype.execute = function (_a) {
        var email = _a.email, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var user, lastSession, now, sessionDate, difference, minutes, session;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, client_1.prisma.user.findUnique({
                            where: {
                                email: email
                            }
                        })];
                    case 1:
                        user = _b.sent();
                        if (!user) {
                            throw new AppError_1.AppError("User does not exists");
                        }
                        return [4 /*yield*/, client_1.prisma.session.findFirst({
                                where: {
                                    userId: user.id
                                },
                                orderBy: {
                                    created_at: 'desc'
                                }
                            })];
                    case 2:
                        lastSession = _b.sent();
                        if (!lastSession) return [3 /*break*/, 5];
                        if (!lastSession.status) {
                            throw new AppError_1.AppError("Session expired");
                        }
                        now = new Date();
                        sessionDate = new Date(lastSession.created_at);
                        difference = (0, moment_1["default"])(now).diff((0, moment_1["default"])(sessionDate));
                        minutes = moment_1["default"].duration(difference).asMinutes();
                        if (!(minutes > 40)) return [3 /*break*/, 4];
                        return [4 /*yield*/, client_1.prisma.session.update({
                                data: {
                                    status: false
                                },
                                where: {
                                    id: lastSession.id
                                }
                            })];
                    case 3:
                        _b.sent();
                        throw new AppError_1.AppError("Session expired");
                    case 4: return [2 /*return*/, lastSession];
                    case 5:
                        if (user.password != password) {
                            throw new AppError_1.AppError("User or password invalids");
                        }
                        return [4 /*yield*/, client_1.prisma.session.create({
                                data: {
                                    userId: user.id
                                }
                            })];
                    case 6:
                        session = _b.sent();
                        return [2 /*return*/, session];
                }
            });
        });
    };
    return LoginUseCase;
}());
exports.LoginUseCase = LoginUseCase;
//# sourceMappingURL=LoginUseCase.js.map